from django.test import TestCase
from chat import frequency_analysis

class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    # def test_false_is_true(self):
    #     print("Method: test_false_is_true.")
    #     self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)

    def freq_analysis(self):
        print("Method: freq_analysis.")
        self.assertEqual(frequency_analysis.main_analysis('hello'), ['general'])
        self.assertEqual(frequency_analysis.main_analysis('trauma'), ['bipolar', 'panic', 'ptsd'])
# Create your tests here.
