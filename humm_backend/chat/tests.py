import unittest
from chat import frequency_analysis


class TestSum(unittest.TestCase):
    def test_freq_analysis(self):
        print("Method: freq_analysis.")
        self.assertEqual(frequency_analysis.main_analysis('hello'), ['general'])
        self.assertEqual(frequency_analysis.main_analysis('trauma'), ['bipolar', 'panic', 'ptsd'])



        # one word in depression category, one word in eating category
        self.assertEqual(frequency_analysis.main_analysis('dehumanizing b/p'), ['depression', 'eating'])

        # two words in depression category, one word in eating category
        self.assertEqual(frequency_analysis.main_analysis('dehumanizing dehumanizing b/p'), ['depression'])

        # empty text
        self.assertEqual(frequency_analysis.main_analysis(''), ['general'])

        # zero words in dataset
        self.assertEqual(frequency_analysis.main_analysis('jaksdna asdasdk ajsdjasdadsa'), ['general'])

        # two multi-category words with overlapping categories
        self.assertEqual(frequency_analysis.main_analysis('ableist counselling'),
                         ['anxiety', 'depression', 'suicide_attempt'])

        # r/depression rant
        self.assertEqual(frequency_analysis.main_analysis("""I’m grateful my parents let me live with them. 
        But I just lost my good paying job and any new job I take will be a massive pay downgrade. 
        I have no college degree, I would only qualify for sh*t jobs because I don’t know anyone. 
        I only got that job because of my friend, making 1500 a week. What now I’m just supposed to go 
        work a minimum wage crap show and make like 300 a week?! Ridiculous… I hate jobs. I hate working
         with people. I hate having depression and anxiety. Depression makes me want to kms and do 
         nothing all day. And anxiety prevents me from actually doing anything because I’m scared 
         and don’t feel adult enough to do anything adult like. That’s another thing… I feel like 
         a fking child, just waiting for someone to guide my life. Sitting in my room with no desire 
         to do anything other than distract myself with video games and social media all day just to 
         do it all over again the next day. A vicious cycle that only causes more depression and 
         loneliness."""),
                         ['depression'])

        # r/ptsd rant
        self.assertEqual(frequency_analysis.main_analysis("""Hi! Currently i’m seeing a therapist 
        once a month over the phone for anxiety, and i was wondering if the therapist I’m talking 
        to now for anxiety would be able to help with PTSD as well. I was basically wondering if 
        all therapist are well rounded in everything mental health related or if they specialize 
        in only certain conditions. I’m fairly certain i have PTSD from my mom’s drinking growing 
        up and i’m not exactly sure what to do about it. Every time she drinks i get flashbacks 
        to the absolute worst points of her alcoholism and get myself worked up into panic attacks 
        & mental breakdowns until the drinking finally ends. I tend to tie things that aren’t 
        related to her drinking to her drinking which makes it extremely hard to overcome. 
        For example, every time i see a paramedic van I automatically connect that van to the 
        images i have stuck in my head from the night that my mom fell down a flight of stairs 
        and broke her nose. I’ve took several tests and all are showing that i do have some 
        form of it, but i was wondering how i would be able to legitimately tell for sure if i 
        have it & how i would get this issue under control. I have distinct memories in my head 
        that constantly flash through my head whenever my mom decides to drink, all of them being 
        bad. Wether it be from when i was a 8yr old seeing my mom being brought home by a complete 
        stranger, her falling down stairs knocking her teeth out, her falling down the stairs and 
        breaking her nose with blood all over her face, cops coming to our house multiple times 
        due to her drinking, drunken slurs of hatred towards me, as well as physical abuse due to 
        her belligerent drinking. All in all if someone thinks i have it, or knows of ways to 
        deal with it please let me know, thank you and take care. feel free to dm if you want to 
        rant, discuss, or give advice on anything regarding me, or you. (:"""),
                         ['ptsd'])

if __name__ == '__main__':
    unittest.main()