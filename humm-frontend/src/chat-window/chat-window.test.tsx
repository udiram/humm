import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ChatWindow from './chat-window';
import { text } from 'stream/consumers';

const axios = require('axios');
jest.mock("axios");

const disorderList = ['ptsd'];

test('enter text and send', async () => {
    window.HTMLElement.prototype.scrollIntoView = function () { };
    axios.post.mockResolvedValue({ data: disorderList });

    render(<ChatWindow />);
    const textInput = screen.getByTestId('text-input');
    const form = screen.getByTestId('form');
    const textSubmit = screen.getByTestId('text-submit');
    const chatMessages = screen.getByTestId('chat-messages');

    console.log(chatMessages.childElementCount);
    expect(chatMessages.childElementCount).toEqual(2);

    userEvent.type(textInput, "endure");
    userEvent.click(textSubmit);

    await waitFor(() => expect(chatMessages.childElementCount).toEqual(3));

    userEvent.type(textInput, "EOM");
    userEvent.click(textSubmit);
    
    await waitFor(() => expect(chatMessages.childElementCount).toEqual(5));
});
