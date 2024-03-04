namespace ProblemSolving.Easy;

public static class ElectronicsShop
{
    public static int GetMoneySpent(int[] keyboards, int[] drives, int b)
    {
        var max = -1;

        for (int i = 0; i < keyboards.Length; i++)
        {
            for (int j = 0; j < drives.Length; j++)
            {
                var sum = keyboards[i] + drives[j];
                if (sum <= b && sum > max)
                {
                    max = sum;
                }
            }
        }

        return max;
    }
}