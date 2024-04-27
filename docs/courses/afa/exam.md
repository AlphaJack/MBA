# Advanced Financial Accounting exam questions

This is a comprehensive list of exam questions and exercises with step by step solutions and answers, obtained from official exams and exams simulations.  
It is possible to mark your choices and enter your values in the text boxes before checking the corrent answer.

## Business Combinations

### Questions

!!! question

    Which of the following statement is TRUE?

    - [ ] According to the acquisition method, direct costs of the acquisition (attorneys, appraisers, accountants, investment bankers, etc.) are part of the fair value received
    - [ ] Intangible assets are assets that cannot be sold or separated from the acquired enterprise
    - [ ] Under the purchase method any contingent payment is ignored
    - [ ] In-Process R&D is not subject to impairment test

    ??? answer
    
        The acquisition method doesn't include direct costs of the acquisition under the FVOE.  
        All assets, by definition, must be separately identifiable.  
        The purchase method ignores each contingent payment, while the acquisition method considers it.  
        In-Process R&D is subject to impairment test.  
        
        The third choice is then the correct answer

!!! question

    Which of the following is **NOT** a condition to define an entity as an investment entity?
    
    - [ ] the entity obtains funds from one or more investors for the purpose of providing those investor(s) with investment management services
    - [ ] the entity measures and evaluates the performance of substantially all of its investments on a fair value basis
    - [ ] the entity measures and evaluates the performance of substantially all of its investments on a cost accounting basis
    - [ ] the entity commits to its investors that its business purpose is to invest funds solely for returns from capital appreciation, investment income and both

    ??? answer
    
        Investment entities don't need to consolidate because they already consider all of their investments on a fair value basis.
        
        The third option is then the correct answer

!!! question

    According to IFRS 10, which of the following are NOT conditions for control?

    - [ ] exposure, or rights, to variable returns from involvement with the investee
    - [ ] the ability to use power over the investee to affect the amount of the investors returns
    - [ ] exposure, or rights, to fixed returns from involvement with the investee
    - [ ] power over the investee

    ??? answer
        Control involve risks caused by the exposure to variable returns.

        Option 3 is then the correct answer.

## Valuation of Stock prices

### Exercises

!!! exercise

    Based on the following data, please estimate the terminal value of residual eamings at year 3.  
    Use residual earning growth rate in the computation.

    ??? summary "Data"
    
        | Entry                    |   Value |
        | ------------------------ | -------:|
        | Market value             | 150000€ |
        | Book value               |  30000€ |
        | P/B                      |       5 |
        | Earnings                 |   5200€ |
        | P/E                      |  28.85€ |
        | Dividends                |    780€ |
        | Outstanding shares       |    6000 |
        | LTGR of EPS after year 2 |      7% |
        | Forecasted EPS at year 1 |    1.11 |
        | Forecasted EPS at year 2 |    1.19 |
        | Required rate of return  |      8% |

    The terminal value of residual earnings is:
    
    - [ ] 8.22
    - [ ] 9.35
    - [ ] 7.42
    - [ ] 1.84

    ??? solution

        There is a series of calculations to perform in order to get the terminal value of retained earnings at year 3.
        Below you can see the formulas and the table with the results. Figures in bold were given by the exercise.
        It is best to proceed on a yearly basis.
        Assuming a constant dividend payout.

        $$
        \begin{split}
        \text{EPS}_{(0)} &= \text{Earnings}_{(0)} / \text{OS} \\
        \text{DPS}_{(0)} &= \text{Dividends}_{(0)} / \text{OS} \\
        \text{BPS}_{(0)} &= \text{BVOE}_{(0)} / \text{OS} \\
        \text{DP} &= \text{DPS}_{(0)} / \text{EPS}_{(0)} \\
        &\\
        \text{EPS}_{(1)} &= \text{given} \\
        \text{DPS}_{(1)} &= \text{EPS}_{(1)} \times \text{DP} \\
        \text{BPS}_{(1)} &= \text{BPS}_{(0)} + \text{EPS}_{(1)} - \text{DPS}_{(1)} \\
        \text{ROCE}_{(1)} &= \text{EPS}_{(1)} / \text{BPS}_{(0)} \\
        \text{REPS}_{(1)} &= (\text{ROCE}_{(1)} - \text{RR}) \times \text{BPS}_{(0)} \\
        &\\
        \text{EPS}_{(2)} &= \text{given} \\
        \text{DPS}_{(2)} &= \text{EPS}_{(2)} \times \text{DP} \\
        \text{BPS}_{(2)} &= \text{BPS}_{(1)} + \text{EPS}_{(2)} - \text{DPS}_{(2)} \\
        \text{ROCE}_{(2)} &= \text{EPS}_{(2)} / \text{BPS}_{(1)} \\
        \text{REPS}_{(2)} &= (\text{ROCE}_{(2)} - \text{RR}) \times \text{BPS}_{(1)} \\
        \text{REGR}_{(2)} &= \text{REPS}_{(2)} / \text{REPS}_{(1)} - 1 \\
        &\\
        \text{EPS}_{(3)} &= \text{EPS}_{(2)} \times (1 + \text{LTGR}_\text{EPS}) \\
        \text{DPS}_{(3)} &= \text{EPS}_{(3)} \times \text{DP} \\
        \text{BPS}_{(3)} &= \text{BPS}_{(2)} + \text{EPS}_{(3)} - \text{DPS}_{(3)} \\
        \text{ROCE}_{(3)} &= \text{EPS}_{(3)} / \text{BPS}_{(2)} \\
        \text{REPS}_{(3)} &= (\text{ROCE}_{(3)} - \text{RR}) \times \text{BPS}_{(2)} \\
        \text{REGR}_{(3)} &= \text{REPS}_{(3)} / \text{REPS}_{(2)} - 1 \\
        \end{split}
        $$


        The obtained values should look like this:

        | Entry     | Actual value (Y0) | Point forecast (Y1) | Point forecast (Y2) | Projection forecast (Y3+) |
        | --------- | ----------------: | ------------------: | ------------------: | ------------------------: |
        | EPS       | 0.87              | **1.11**            | **1.19**            | 1.27                      |
        | DPS       | 0.13              | 0.17                | 0.18                | 0.19                      |
        | BPS       | 5.00              | 5.94                | 6.96                | 8.04                      |
        | ROCE      |                   | 0.22                | 0.20                | 0.18                      |
        | REPS      |                   | 0.71                | 0.71                | 0.72                      |
        | REGR      |                   |                     | 0.01                | 0.00                      |

        Now the TV of RE at year 3 can be easily calculated:

        $$
        \begin{split}
        \text{TV}(\text{REPS}_{(3)}) &= \text{REPS}_{(3)} / (\text{RR} - \text{REGR}_{(3)}) \\
        &= 0.72 / (0.08 - 0.0033309) \\
        &= 0.72 / 0.08 \\
        &= 9.35 \\
        \end{split}
        $$

        9.35 is then the correct answer.

!!! exercise

    Given the following information, using the residual earnings model, answer the questions below using two digit roundings.
    
    ??? summary "Data"
    
        | Entry                    |   Value |
        | ------------------------ | -------:|
        | Market value             | 120000€ |
        | Book value               |  40000€ |
        | P/B                      |       3 |
        | Earnings                 |   8000€ |
        | P/E                      |  15.00€ |
        | Dividends                |      0€ |
        | Outstanding shares       |    5000 |
        | LTGR of EPS after year 2 |      8% |
        | Forecasted EPS at year 1 |    1.70 |
        | Forecasted EPS at year 2 |    1.77 |
        | Required rate of return  |      8% |

    Please estimate terminal value of residual earnings at time 3 (i.e., using residual earnings at time 3 in the terminal value formula) and its present value using discount rate at time 3, which is equal to 1.26.
   
    1. Given the previous information and using the residual earnings model, what is the present value of forecasted residual earnings (i.e., RE total in the previous table, that is year 1 + year 2 + year 3)? <input type="text"/>
    2. Given the previous information and using the residual earnings model, what is the company stock value? <input type="text"/>
    3. How would your stock price valuation differ considering a different growth rate, for example a GDP growth rate of 3,5%? <input type="text"/>
        
    ??? solution
    
        ??? solution "Question 1"
        
            It is required to get the NPV of REPS dividing them by their DF before they can be summed.  
            The process to calculate REPS is the same as the exercise above.  
            Figures in bold were given by the exercise.
        
            | Entry       | Actual value (Y0) | Point forecast (Y1) | Point forecast (Y2) | Projection forecast (Y3+) |
            | ----------- | -----------------:| -------------------:| -------------------:| -------------------------:|
            | EPS         |              1.60 |            **1.70** |            **1.77** |                      1.91 |
            | DPS         |                 0 |                   0 |                   0 |                         0 |
            | BPS         |              8.00 |                9.70 |               11.47 |                     13.38 |
            | ROCE        |                   |                0.21 |                0.18 |                      0.17 |
            | REPS        |                   |                1.04 |                0.97 |                      1.03 |
            | DR          |                   |            **1.08** |                1.17 |                  **1.26** |
            | NPV of REPS |                   |                0.96 |                0.83 |                      0.82 |
            
            Now the total value of REPS can be easily calculated:
            
            $$
            \begin{split}
            \text{REPS} &= \text{REPS}_{(1)} + \text{REPS}_{(2)} + \text{REPS}_{(3)} \\
            &= 0.96 + 0.83 + 0.82 \\
            &= 2.62 \\
            \end{split}
            $$
            
            2.62 is then the correct answer to the first question.
            
        ??? solution "Question 2"

            The forecasted stock price is given by the sum of the actual BPS, the total value of REPS and their terminal value.  
            From the previous table it is possible to calculate the terminal value of REPS from their growth rate:
            
            $$
            \begin{split}
            \text{REGR}_{(n)} &= \text{REPS}_{(n)} / \text{REPS}_{(n-1)} - 1 \\
            & \\
            \text{TV}(\text{REPS}_{(3)}) &= \text{REPS}_{(3)} / (\text{RR} - \text{REGR}_{(3)}) \\
            &= 1.03 / (0.08 - 0.06) \\
            &= 56.77 \\
            & \\
            \text{NPV}(\text{TV}(\text{REPS}_{(3)})) &= \text{TV}(\text{REPS}_{(3)}) / \text{DR}_\text{(3)} \\
            &= 56.77 / 1.26 \\
            &= 45.06 \\
            \end{split}
            $$

            | Entry              | Actual value (Y0) | Point forecast (Y1) | Point forecast (Y2) | Projection forecast (Y3+) |
            | ------------------ | -----------------:| -------------------:| -------------------:| -------------------------:|
            | REPS               |                   |                1.04 |                0.97 |                      1.03 |
            | REGR               |                   |                     |               -0.07 |                      0.06 |
            | DR                 |                   |            **1.08** |                1.17 |                  **1.26** |
            | TV of REPS         |                   |                     |                     |                     56.77 |
            | NPV of TV of REPS  |                   |                     |                     |                     45.06 |
            
            Now the forecasted share price can be easily calculated:
            
            $$
            \begin{split}
            \text{FSP} &= \text{BPS}_{(0)} + \text{REPS} + \text{NPV}(\text{TV}(\text{REPS}_{(3)})) \\
            &= 8 + 2.62 + 45.06 \\
            &= 55.68 \\
            \end{split}
            $$
            
            55.68 is then the correct answer to the second question.
            
        ??? solution "Question 3"
            
            If the REGR at year 3 measured 3.5%, it would change the TV of REPS:
            
            $$
            \begin{split}
            \text{TV}(\text{REPS}_{(3)}) &= \text{REPS}_{(3)} / (\text{RR} - \text{REGR}_{(3)}) \\
            &= 1.03 / (0.08 - 0.035) \\
            &= 22.89 \\
            & \\
            \text{NPV}(\text{TV}(\text{REPS}_{(3)})) &= \text{TV}(\text{REPS}_{(3)}) / \text{DR}_\text{(3)} \\
            &= 22.89 / 1.26 \\
            &= 18.17 \\
            & \\
            \text{FSP} &= \text{BPS}_{(0)} + \text{REPS} + \text{NPV}(\text{TV}(\text{REPS}_{(3)})) \\
            &= 8 + 2.62 + 18.17 \\
            &= 28.79 \\
            \end{split}
            $$
            
            28.79 is then the correct answer to the third question.
        
## Preparation of Consolidated Financial Statements

### Questions

!!! question

    According to the following information:

    - Investor A, whose business is the production and sale of soft cheese, establishes and initially owns 100% of an operation, Company B, which also produces and sells cheese
    - Investor A then decides to make Company B a publicly traded entity, retaining 30% of the equity (and related voting rights) of Investee B
    - The other 70% of the voting rights are widely distributed among thousands of shareholders, none individually holding more than 1% of the voting rights
    - At the time of retaining the 30% voting interest, Investor A also signed a contract with Company B that allows Investor A to manage and operate all of the activities of Company B
    - Company B has no employees of its own because all employees are leased by Investor A
    - A supermajority vote of 75% is required to cancel the management and operations contract with Investor A

    Should Investor A consolidate Company B?
    
    - [ ] Yes
    - [ ] No

    ??? answer
        A has to consolidate B because it owns the majority of the subsidiary.

        Yes is then the correct answer.

!!! question

    Which theory/theories are allowed un IFRS 3?

    - [ ] Entity theory and parent Theory
    - [ ] Modified parent theory and entity theory
    - [ ] Proprietary theory
    - [ ] Proprieraty theory and entity theory
    - [ ] Modified parent theory and parent theory

    ??? answer
        
        IFRS 3 requires NCI to be reported at FV. The only theories that allow so are the Modified parent and the Entity ones.
        
        The second choice is then the correct answer.

!!! question

    The parent company owns & controls 90% of the subsidiary. How much should the parent company consolidate of the subsidiary's balance sheet?

    - [ ] 10%
    - [ ] 90%
    - [ ] 100%
    - [ ] 0%

    ??? answer

        The investor owns 90% of the investee, controlling it entirely. It must then consolidate the entire subsidiary balance sheet.

        100% is then the correct answer.

!!! question

    Mister Ono Yoko owns 75% of Company YoToTa and 80% of Company Space Shuttle. The remaining 20% of Space Shuttle is owned by Company YoToTa. According to current IFRS 10, which one is true?
    
    - [ ] YoToTa and Space Shuttle provide two separate financial statements
    - [ ] YoToTa consolidates Space Shuttle
    - [ ] Mr. Ono Yoko consolidates all two entities
    - [ ] None of the options provided
    
    ??? answer
    
        Ono Yoko is a natural person, according to IFRS 10 he is excluded from consolidation, even if he owns 75% of YoToTa and 95% of Space Shuttle.
        
        The first choice is then the correct answer.

### Exercises

!!! exercise

    A controls B with 60% direct ownership. A sells products to B for 1,000 that were previously held at a carrying amount of 500,
    thus recording a gain of 500. At the end of the fiscal year, half of the products are still in the possession of B. What kind of adjustments are required?

    Please note that if not otherwise specified, the Tax Rate = 30%

    - [ ] 300 should be offset from the ‘Costs of Goods'in the Income Statement of B
    - [ ] No adjustments are required
    - [ ] 500 should be offset from the ‘Revenues’ in the Income Statement of A
    - [ ] 250 should be offset from the ‘Net Income’ in Consolidated Financial Statements
    - [ ] None of the options provided

    ??? solution
        Remembering that

        $$
        \begin{split}
        \text{CA} &= \text{HC} - \text{AD} \\
            &= 500 \\
            \end{split}
        $$

        And that

        $$
        \begin{split}
        \text{R} &= \text{CA} + \text{NI} \\
        &= 1000 \\
        \end{split}
        $$

        We read that the NI (gain) is recorded in the IS of A. At the end of the year, B has sold half of its products, but we don't know for how much, so we cannot make assumptions on its R.

        From this we get that:

        - Option 1 is wrong because it considers an incorrect amount: if it had asked 250 instead of 300, it would have been a valid option
        - Option 2 is wrong because being an intragroup transactions some adjustments are needed to prepare CFS
        - Option 3 is wrong because revenues for A are 1000, so they must not be offset by any amount
        - Option 1 is wrong because even if we can operate at A level (the net income is the already recorded gain of 500), we still cannot operate at B level, because we have no data about B selling price

        Option 5 is then the correct answer.

!!! exercise

    BETA's balance sheet on December 31, 2000 was as follows:
    
    ??? Summary "Balance sheet"
    
        | Entry                               | Value |
        | ----------------------------------- | -----:|
        | Current Assets                      | 700k€ |
        | Non Current assets                  | 1.3M€ |
        | Current and Non Current Liabilities | 1.2M€ |
        | Common Stock and Retained Earnings  | 800k€ |

    On December 31, 2000 ALFA acquired 60 percent of BETA's outstanding common stock for 1.5M€ in cash.  The fair value of NCIs is 1.0M€. On that date the fair value of BETA's current assets was 1.0M€ and the fair value of BETA's non current assets was 1.5M€. The fair value of all liabilities of BETA equals to their book values. Tax rate 30%.

    Using the modified parent company theory, as a result of ALFA's acquisition of BETA the consolidated balance sheet should report a goodwill of:
    
    - [ ] 1.35M€
    - [ ] 540k€
    - [ ] 810k€
    - [ ] 1.0M€

    ??? solution
    
        After having split the BVOE in its CI and NCI paritions (60 and 40 percent), and having calculated and allocated the differences between FV and BV of both current and non current assets, the GW is computed according to the modified parent theory: only the CI partition is taken into account.  
        In this case the GW is given as
        
        $$
        \begin{split}
        \text{GW} &= \text{CT} - \text{BVOE} - \text{NI CA} - \text{NI NCA} \\
        &= 1500000 - 480000 - 126000 - 84000 \\
        &= 810000 \\
        \end{split}
        $$

        | Entry                           |      Total |          CI |         NCI |
        | ------------------------------- | ----------:| -----------:| -----------:|
        | EV                              |    2500000 | **1500000** | **1000000** |
        | BVOE                            | **800000** |      480000 |      320000 |
        | Current Assets FV - BV          |     300000 |      180000 |      120000 |
        | Current Assets DTL              |      90000 |       54000 |       36000 |
        | Current Assets net increase     |     210000 |      126000 |       84000 |
        | Non current Assets FV - BV      |     200000 |      120000 |       80000 |
        | Non current Assets DTL          |      60000 |       36000 |       24000 |
        | Non current Assets net increase |     140000 |       84000 |       56000 |
        | GW                              |          - |      810000 |           0 |
     
        The third option is then the correct answer.

## Impairment test of a Cash Generating Unit

### Questions

!!! question

    The main goal of the impairment test is:
  
    - [ ] Ensuring that the carrying amount of an asset is greater than its recoverable amount, where the recoverable amount is the higher between fair value and value in use
    - [ ] Ensuring that the carrying amount of an asset is not greater than its recoverable amount, where the recoverable amount is the higher between fair value and value in use
    - [ ] Ensuring that companies are not inflating their earnings and distribute more dividends
    - [ ] Ensuring that the carrying amount of an asset is not greater than its recoverable amount, where the recoverable amount is the lower between fair value and value in use
    
    ??? answer
    
        An impairment loss occurs when the RA of an asset is lower than its CA, thus when the higher between the fair value and value in use is higher than the book value of that asset.
        
        The second choice is then the correct answer.

### Exercises

!!! exercise

    Using the following information answer the three questions below.
    
    ??? summary "Data"
    
        | Entry | Subsidiary 1 | Subsidiary 2 | Subsidiary 3 |
        | ----- | ------------:| ------------:| ------------:|
        | BVOE  |        12000 |        14000 |         6000 |
        | FVOE  |        20000 |        26000 |         9000 |
        | CT    |        30000 |        28000 |        24000 |
        | GW    |        10000 |         2000 |        15000 |

    ??? summary "Balance sheets of subsidiaries"
    
        | Entry        | Subsidiary 1 | Subsidiary 2 | Subsidiary 3 |
        | ------------ | ------------:| ------------:| ------------:|
        | NWA          |         2000 |            0 |         4000 |
        | PPE          |         4000 |         8000 |         2000 |
        | Machinery    |         8000 |         5000 |        10000 |
        | IP           |         4000 |         4000 |            0 |
        | FI           |            0 |        10000 |         8000 |
        | IADUL        |         6000 |         9000 |         8000 |
        | IAIUL        |         5000 |         3000 |         6000 |
        | GW           |        10000 |         2000 |        15000 |
        | CA of Assets |        39000 |        41000 |        53000 |
        
	The subsidiaries give raise to the CGU above whose assets are identified as follows:

	??? summary "CGU composition"
	
        | Entry     | Subsidiary 1 | Subsidiary 2 | Subsidiary 3 |
        | --------- | ------------:| ------------:| ------------:|
        | NWA       |         0.50 |         0.30 |            1 |
        | PPE       |         0.20 |         0.70 |         0.40 |
        | Machinery |         0.10 |         0.50 |         0.60 |
        | IP        |         0.80 |         0.10 |         0.10 |
        | FI        |         0.60 |         0.25 |            0 |
        | IADUL     |         0.50 |         0.40 |         0.70 |
        | IAIUL     |         0.50 |         0.20 |         0.20 |
        | GW        |         0.80 |         0.50 |         0.40 |
        
    1. What is the carrying amount of total assets of CGU 1?  <input type="text"/>    
    
    2. Given the following information regarding the CGU 1, how much is EBIT adjusted in year T1?  <input type="text"/>
    
        ??? summary "Data"
        
            | Entry                 | Value |
            | --------------------- | -----:|
            | Amortization rate     |  0.20 |
            | Tax rate              |  0.25 |
            | Company growth rate   |  0.04 |
            | Market growth rate    |  0.01 |
            | Discount rate         |  1.09 |
            
        ??? summary "Income statement"

            | Entry         | Year 1 | Year 2 | Year 3 |
            | ------------- | ------:| ------:| ------:|
            | Revenues      |  65000 |  67600 |  70304 |
            | COGS          | -55000 | -57200 | -59488 |
            | EBITDA        |  10000 |        |        |
            | DA            |        |        |        |
            | EBIT          |        |        |        |
            | OOC           |  -1000 |  -1000 |  -2000 |
            | Adjusted EBIT |        |   3430 |   2608 |

    3. Given the previous and following information, calculate the recoverable amount for the CGU 1, if any, using OCF at year 6 to compute the TV. <input type="text"/>

        ??? summary "Balance sheet"

            | Entry                        | Year 1 | Year 2 | Year 3 |
            | ---------------------------- | ------:| ------:| ------:|
            | NWA                          |        |   5200 |   5408 |
            | FA                           |  54100 |  56264 |  58515 |
            | Total Assets                 |        |  61424 |  63923 |
            | NCL                          |  29700 |  23000 |  27000 |
            | Equity                       |  29400 |  38464 |  36923 |
            | Total Equity and Liabilities |        |  61464 |  63923 |

        ??? summary "Cash flow statement"

            | Entry               | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Year 6 |
            | ------------------- | ------:| ------:| ------:| ------:| ------:| ------:|
            | Adjusted EBIT       |        |   3430 |   2608 |   2712 |   2820 |   2849 |
            | Taxes               |   -815 |   -858 |   -652 |   -678 |   -705 |   -712 |
            | DA                  |        |   5970 |   6208 |      0 |      0 |      0 |
            | Restructuring costs |      0 |      0 |      0 |      0 |      0 |      0 |
            | NWA variation       |  -1000 |   -200 |   -208 |        |        |        |
            | Capex               |  -6000 |  -8134 |  -8459 |      0 |      0 |      0 |
            | OCF                 |        |    209 |   -503 |   2034 |   2115 |   2136 |
            | NPV of OCF          |        |    176 |   -388 |   1441 |   1375 |        |

    4. Given the previous information, if any calculate the impairment loss for the CGU 1, otherwise just write 0. <input type="text"/>

    ??? solution
        
        ??? solution "Question 1"

            To calculate the CA of asset it is first required to split the subsidiaries CT into the CGU:
            
            | Entry        | Subsidiary 1 | Subsidiary 2 | Subsidiary 3 |    CA |
            | ------------ | ------------:| ------------:| ------------:| -----:|
            | NWA          |         0.50 |         0.30 |            1 |  5000 |
            | PPE          |         0.20 |         0.70 |         0.40 |  7200 |
            | Machinery    |         0.10 |         0.50 |         0.60 |  9300 |
            | IP           |         0.80 |         0.10 |         0.10 |  3600 |
            | FI           |         0.60 |         0.25 |            0 |  2500 |
            | IADUL        |         0.50 |         0.40 |         0.70 | 12200 |
            | IAIUL        |         0.50 |         0.20 |         0.20 |  4300 |
            | GW           |         0.80 |         0.50 |         0.40 | 15000 |
            | Total Assets |              |              |              | 59100 |
            
            Note: from the text of the exercise it was also possible to obtain this figure by just calculating the NWA value (5000) and summing it to 
            the FA value (54100) written in the balance sheet of the third question.  
            It was also possible to obtain the value by summing NCL and Equity in the same balance sheet.
            
            59100 is then the correct answer to the first question.

        ??? solution "Question 2"
            
            To calculate the adjusted EBIT it is enough to apply the amortization rate to the value of amortizable assets (AAssets), that is only part of the total value of assets; it comprehends PPE, machinery and intangible assets with definite useful life (IADUL).  
            After that it is possible to calculate EBIT for year 1.
            
            $$
            \begin{split}
            \text{DA} &= \text{AAssets} \times \text{AR} \\
            &= (\text{PPE} + \text{Machinery} + \text{IADUL}) \times 0.20 \\
            &= (7200 + 9300 + 12200) \times 0.20 \\
            &= 28700 \times 0.20 \\
            &= 5740
            \end{split}
            $$
            
            EBITDA of future years is calculated as the difference between Revenues and COGS.
            The value of amortization increases with the value of amortizable assets, which grows at the company growth rate (4%).  
            EBIT can be then obtained by the difference of EBITDA and DA, or by the sum of OOC and adjusted EBIT.  
            
            $$
            \begin{split}
            \text{EBITDA}_\text{(n)} &= \text{Revenues}_\text{(n)} - \text{COGS}_\text{(n)} \\
            \text{EBIT}_\text{(n)} &= \text{EBITDA}_\text{(n)} - \text{DA}_\text{(n)} \\
            \text{AEBIT}_\text{(n)} &= \text{EBIT}_\text{(n)} - \text{OOC}_\text{(n)} \\
            \end{split}
            $$       
            
            This is how the income statement looks like.  
            Figures in bold were entered manually.
                
            | Entry         |    Year 1 |    Year 2 |    Year 3 |
            | ------------- | ---------:| ---------:| ---------:|
            | Revenues      |     65000 |     67600 |     70304 |
            | COGS          |    -55000 |    -57200 |    -59488 |
            | EBITDA        |     10000 | **10400** | **10816** |
            | DA            | **-5740** | **-5970** | **-6208** |
            | EBIT          |  **4260** |  **4430** |  **4608** |
            | OOC           |     -1000 |     -1000 |     -2000 |
            | Adjusted EBIT |  **3260** |      3430 |      2608 |
            
            Note: from the text of the exercise it was also possible to obtain this figure by just dividing the amount of tax paid (815) by the tax rate (0.25) in the cash flow statement of the third question.  
            
            3260 is then the correct answer to the second question

        ??? solution "Question 3"
            
            The VIU represents the RA of the CGU and is obtained by the sum of its discounted OCF.  
            Note that the amortization amount in the **cash flow statement** is summed to other values to obtain OCF, it is not subtracted as it was in the **income statement**.  
            The NPV of OCF is given by the division of the former of the DR.
            
            $$
            \begin{split}
            \text{OCF}_\text{(n)} &= \text{AEBIT}_\text{(n)} - \text{Taxes}_\text{(n)} + \text{Amortization}_\text{(n)} - \text{RestCosts}_\text{(n)} + \text{NWA}_\text{(n)} - \text{NWA}_\text{(n-1)} - \text{Capex}_\text{(n)} \\
            \text{NPV}(\text{OCF}_{(n)}) &= \text{OCF}_\text{(n)} / \text{DR}_\text{(n)} \\
            \end{split}
            $$

            The terminal value of future OCF is obtained by dividing OCF at year 6 for the difference between the discount rate and the market growth rate.  

            $$
            \begin{split}
            \text{TV}(\text{OCF}_{(6)}) &= \text{OCF}_\text{(6)} / ( \text{RR} - \text{LTGR} ) \\
            &= \text{OCF}_\text{(6)} / ( \text{DR}_\text{(1)} - 1 - \text{LTGR} ) \\
            &= 2136 / ( 0.09 - 0.01 ) \\ 
            &= 26700 \\
            &\\
            \text{NPV}(\text{TV}(\text{OCF}_{(6)})) &= \text{TV}(\text{OCF}_{(6)}) / \text{DR}_\text{(6)} \\
            &= 26700 / 1.09^6 \\
            &= 15920 \\
            \end{split}
            $$

            This is how the income statement looks like.  
            Figures in bold were entered manually.

            | Entry               |   Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |    Year 6 |
            | ------------------- | --------:| ------:| ------:| ------:| ------:| --------: |
            | Adjusted EBIT       | **3260** |   3430 |   2608 |   2712 |   2820 |   2849    |
            | Taxes               |     -815 |   -858 |   -652 |   -678 |   -705 |   -712    |
            | DA                  | **5740** |   5970 |   6208 |      0 |      0 |      0    |
            | Restructuring costs |        0 |      0 |      0 |      0 |      0 |      0    |
            | NWA variation       |    -1000 |   -200 |   -208 |        |        |           |
            | Capex               |    -6000 |  -8134 |  -8459 |      0 |      0 |      0    |
            | OCF                 | **1185** |    209 |   -503 |   2034 |   2115 |   2136    |
            | NPV of OCF          | **1087** |    176 |   -388 |   1441 |   1375 |           |
            | TV of OCF           |          |        |        |        |        | **26700** |
            | NPV of TV of OCF    |          |        |        |        |        | **15920** |
        
            As said before, the VIU is given by the sum of the NPV values and the TV of all the future OCF.

            $$
            \begin{split}
            \text{VIU} &= \sum_{n=1}^{p-1}\text{NPV}(\text{OCF}_{(n)}) + \text{NPV}(\text{TV}(\text{OCF}_{(p)})) \\
            &= \sum_{n=1}^{5}\text{NPV}(\text{OCF}_{(n)}) + \text{NPV}(\text{TV}(\text{OCF}_{(6)})) \\
            &= 3691 + 15920 \\
            &= 19611 \\
            \end{split}
            $$
            
            19611 is then the correct answer to the third question.
		
        ??? solution "Question 4"
    
            By comparing the RA (19611) of the CGU and its CA (59100), it is possible to state an impairment loss of 39488.
            
            39488 is then the correct answer to the fourth question.
                      
<!--        
        Note: The balance sheet can be filled with values previously obtaines:
    
| Entry                        | Year 1 | Year 2 | Year 3 |
| ---------------------------- | ------:| ------:| ------:|
| NWA                          |  **5000**      |   5200 |   5408 |
| FA                           |  54100 |  56264 |  58515 |
| Total Assets                 |  **59100**      |  61424 |  63923 |
| NCL                          |  29700 |  23000 |  27000 |
| Equity                       |  29400 |  38464 |  36923 |
| Total Equity and Liabilities |  **59100** |  61464 |  63923 |
-->



<!--
\operatorname{NPV} (\operatorname{OCF}_{(n)})
\\
\text{NPV}(\text{OCF}_{(n)})
\\
\operatorname{NPV} \left(\operatorname{OCF}_{(n)}\right)
\\
\text{NPV}\left(\text{OCF}_{\text(n)}\right)
"OCF_(n) non è una variabile, è OCF che è funzione di n"
"Considera che le successioni si scrivono a_n, ma solo perché a(n) occupa piú spazio"
-->

## Computation of Non Controlling Interests

### Questions

!!! question

    Which of the following statement is NOT correct?

    - [ ] Under the parent theory, the focus is on the information needs of parent company owners; NCI are reported at the book values
    - [ ] Under proprietary theory, the subsidiary is an extension of the parent; the CFS is relevant for the parent's shareholders. NCI are not reported in the CFS
    - [ ] The modified parent theory requires the recognition of full FV including NCI’s share while the goodwill belongs only to the controlling owners
    - [ ] Under the parent theory, the focus is on the information needs of subsidiary company owners; NCI are reported at the fair value

    ??? answer
        
        Under the parent theory the focus is on the information needs of the **parent** owners, thus only the BVOE value is reported for NCI.
    
        The fourth choice is then the correct answer

### Exercises

!!! exercise

    Considering the following information,

    - Alfa acquires a 70% of stocks in Beta, in exchange for cash of 240000€
    - Beta's remaining shares traded on an exchange
    - Alfa acquired the 14000 non-publicly traded shares outstanding
    - The fair value of Beta's identifiable net assets is 195000€
    - The shares of Beta at the acquisition date are traded at 16€ per share
    - Alfa elects the option to measure NCIs at full fair value (including control premium)
    
    Please estimate the Total Value of the Firm. <input type="text"/>

    ??? solution
        Since Alfa decided to measure NCI at FV, it is required to calculate their value to obtain the total value of the firm (EV).

        We first need to obtain the total number of outstanting shares

        $$
        \begin{split}
        \text{CIP} \times \text{OS} &= \text{CIS} \\
        \text{OS} &= \text{CIS} / \text{CIP} \\
        &= 14000 / 0.70 \\
        &= 20000 \\
        \end{split}
        $$

        From which we can calculate the NCI value using the stock price at the acquisition date

        $$
        \begin{split}
        \text{NCIS} &= \text{OS} \times (1 - \text{CIP}) \\
        &= 20000 \times 0.30 \\
        &= 6000 \\
        \text{NCI} &= \text{NCIS} \times \text{SP} \\
        &= 6000 \times 16€ \\
        &= 96000 \\
        \end{split}
        $$

        To then obtain the EV

        $$
        \begin{split}
        \text{EV} &= \text{CT} + \text{NCI} \\
        &= 240000€ + 96000€ \\
        &= 336000€ \\
        \end{split}
        $$

        Note: Alfa paid a control premium as its CT is larger than the multiplication between its number of shares and the public stock price.

        336000 is then the correct answer.

!!! exercise

    Alfa is about to finalize the purchase of Sub1 at the following conditions:

    - Acquisition of 60% of the outstanding shares of Sub1
    - Price paid per share = 18€

    At the time of the deal, the following information are available about Sub1:

    - Number of outstanding shares (# stocks) = 1500
    - Average Stock Price of Sub1 (last 3 months) = 15€
    - Equity at Book Value = 8000€
    - Equity at Fair Value of Net Assets = 14000€

    No tax effect to be estimated.

    Please estimate Total Goodwill NCI at fair value.  <input type="text"/>

    ??? solution
        There are two ways to calculate the NCI goodwill at FV, one using just the data regarding NCI and the other one using the full goodwill.

        ??? solution "NCI method"

            We first need to obtain the value of the whole NCI, to then subtract the NCI part of the FVOE

            $$
            \begin{split}
            \text{NCI} &= \text{NCIP} \times \text{SO} \times \text{SP}_\text{NCI} \\
            &= 0.40 \times 1500 \times 15€ \\
            &= 9000€ \\
            \text{GW}_\text{NCI} &= \text{NCI} - \text{NCIP} \times \text{FOVE} \\
            &= 9000€ - 0.40 \times 14000€ \\
            &= 9000€ - 5600€ \\
            &= 3400€ \\
            \end{split}
            $$

        ??? solution "Full GW method"

            We first need to obtain the EV at acquisition date, then calculate the difference with its FV and split the difference between the CI and NCI.

            The first step is to calculate the EV using the CT and the NCI value

            $$
            \begin{split}
            \text{CT} &= \text{CIP} \times \text{SO} \times \text{SP}_\text{CI} \\
            &= 0.60 \times 1500 \times 18€ \\
            &= 16200€ \\
            \text{NCI} &= \text{NCIP} \times \text{SO} \times \text{SP}_\text{NCI} \\
            &= 0.40 \times 1500 \times 15€ \\
            &= 9000€ \\
            \text{EV} &= \text{CT} + \text{NCI} \\
            &= 16200€ + 9000€ \\
            &= 25200€ \\
            \end{split}
            $$

            The FVOE must be subtracted to the EV to obtain the full GW, that must be split in CI and NCI

            $$
            \begin{split}
            \text{GW} &= \text{EV} - \text{FVOE} \\
            &= 25200€ - 14000€ \\
            &= 11200€ \\
            \text{GW}_\text{CI} &= \text{CT} - \text{CIP} \times \text{FVOE} \\
            &= 16200€ - 0.60 \times 14000€ \\
            &= 16200€ - 8400€ \\
            &= 7800€ \\
            \text{GW}_\text{NCI} &= \text{GW} - \text{GW}_\text{CI} \\
            &= 11200€ - 7800€ \\
            &= 3400€ \\
            \end{split}
            $$

        3400 is then the correct answer.

!!! exercise

    On January 1 2020 (Year 1), P acquires a majority stake of S. The following information are needed to prepare Consolidated Financial Statements at the end of Year 1.

    - P pays 40000 to acquire 90% of S.
    - NCI are valued 5000 and the Book Value of S at the time of the acquisition is 15000.
    - Corporate Tax Rate is 30%.
    - At the time of the acquisition, assets of S are valued as follows:
        - Fair value of PPE is 10000. Book Value of PPE is 8000. Accumulated depreciation (or Amortized cost) is 12000 and total useful life is 10 years. P does not change depreciation regime and the remaining useful life is estimated to be 4 years.
        - Fair value of Investment Properties is 15000. Its book value is 10000. Investment Properties have indefinite useful life.
        - Fair value of License is 8000. Book Value of License is 8000. Accumulated amortization (or Amortized cost) is 9000 and total useful life is 4 years. P does not change depreciation regime and the remaining useful life is estimated to be 1 year.
    - During Year 1,
        - S sells to P Inventory whose carrying amount is 3000 for 5000. At the end of Year 1 P still holds the inventory.
        - P sells Finished Goods to S for 2000 whose carrying amount is 800. At the end of the year, S holds the Finished Goods.

    Based on previous information,
    
    1. how much is Goodwill attributed to CI at the end of Year 1? <input type="text"/>
    2. which of the following is the most appropriate accounting representation for the revaluation of PPE?
        - [ ] Debit PPE for 10000, Credit Deferred tax liabilities for 3000, Credit Equity for 7000
        - [ ] Credit PPE for 2000, Credit Deferred tax liabilities for 600, Debit Equity for 1400
        - [ ] Debit PPE for 8000, Credit Deferred tax liabilities for 600, Credit Equity for 1400
        - [ ] Debit PPE for 2000, Credit Deferred tax liabilities for 600, Credit Equity for 1400
        - [ ] None of the options provided
    3. which one of the following is the most appropriate accounting representation for the elimination of equity investment and for equity of the NCI?
        - [ ] Credit Investment in financial assets for 45000, credit Equity NCI for 5000, debit Equity for 50000
        - [ ] Credit Investment in financial assets for 40000, credit Equity NCI for 5000, debit Equity for 45000
        - [ ] Credit Investment in financial assets for 40000, debit Equity NCI for 5000, debit Equity for 35000
        - [ ] Debit Investment in financial assets for 40000, credit Equity NCI for 5000, credit Equity for 45000
        - [ ] None of the options provided
    4. how much is PPE amortization adjusted for the CFS? <input type="text"/>
    5. how much is the change in deferred tax liability due to the PPE extra amortization adjustment for the CFS?  <input type="text"/>
    6. how much is the change in equity NCI due the adjustment for extra amortization of PPE for the CFS?  <input type="text"/>
    7. how much is the effect on earnings NCI of the intra-group sale of inventory for the CFS?  <input type="text"/>
    8. how much is the effect on earnings NCI of the intra-group sale of finished goods for the CFS?  <input type="text"/>
        
    ??? solution
    
        ??? solution "Question 1"
            To compute the NCI goodwill it is necessary to subtract from the NCI-FV the BVOE and the sum of NCI net increase of assets, i.e. the FV revaluation of an asset minus its tax.
            
            $$
            \begin{split}
            \text{NCIGW} &= \text{NCI-FV} - \text{BVOE} - \sum_{i=1}^{n}\text{NCI Assets}_i \\
            &= 5000 - 1500 - 140 - 350 - 0 \\
            &= 3010
            \end{split}
            $$
            
		    Apart from the EV and GW, all other entries are split at 90% and 10%.
		    Figures in bold were given by the exercise.
            
            | Entry                |     Total |        CI |      NCI |
            | -------------------- | ---------:| ---------:| --------:|
            | EV                   |     45000 | **40000** | **5000** |
            | BVOE                 | **15000** |     13500 |     1500 |
            | PPE FV - BV          |      2000 |      1800 |      200 |
            | PPE DTL              |       600 |       540 |       60 |
            | PPE net increase     |      1400 |      1260 |      140 |
            | IP FV - BV           |      5000 |      4500 |      500 |
            | IP DTL               |      1500 |      1350 |      150 |
            | IP net increase      |      3500 |      3150 |      350 |
            | License FV - BL      |     **0** |         0 |        0 |
            | License DTL          |         0 |         0 |        0 |
            | License net increase |         0 |         0 |        0 |
            | GW                   |     25100 |     22090 |     3010 |
            
            3010 is then the correct answer to the first question
            
        ??? solution "Question 2"
            
            Since PPE is an asset that has been revalued positively, and assets are increased on the debit side, the transaction can be represented as follows:
            
            | Account         | Debit | Credit |
            | --------------- | ----: | -----: |
            | Assets:PPE      |  2000 |        |
            | Liabilities:DTL |       |    600 |
            | Equity:OCI      |       |   1400 |
            
            
            The fourth choice is then the correct answer to the second question.
            
        ??? solution "Question 3"
            
            When preparing CFS, in order to not count twice the investment in subsidiary, it is necessary to eliminate the equity of the subsidiary (45000) and the investment of the parent company (40000), allocating the difference to NCI equity. This process can be represented as follows: 
            
            | Account                     | Debit | Credit |
            | --------------------------- | -----:| ------:|
            | Equity                      | 45000 |        |
            | Assets:FinancialInvestments |       |  40000 |
            | Equity:NCI                  |       |   5000 |
            
            The second choice is then the correct answer to the third question.
            
        ??? solution "Question 4"
            
            Given the PPE revaluation (2000) and its expected useful life (4 years), each year the PPE ADA account **is increased** by 500.
            
            500 is then the correct answer to the fourth question.
            
        ??? solution "Question 5"
            
            Given the PPE annual amortization increase (500) and the tax rate (30%), each year the DTL account **is decreased** by 150.  
            It was also possible to obtain this value by dividing the DTL revaluation caused by PPE revaluation (600), by the expected useful life of PPE (4 years).
            
            150 is then the correct answer to the fifth question.

        ??? solution "Question 6"
            
            The adjustment for extra amortization of PPE has no direct effect on the NCI partition of equity, since it only affects earnings (NCI parition is decreased yearly by 50, 10% of 500).
            
            0 is then the correct answer to the fifth question.
            
        ??? solution "Question 7"
            
            The inventory sale is an upsteam (P <- S) transaction, which means that any earning must be split between CI and NCI. The transaction can be represented as follows:
            
            | Account             | Debit | Credit |
            | ------------------- | -----:| ------:|
            | Revenues:Sales      |  5000 |        |
            | Expenses:COGS       |       |   3000 |
            | Liabilities:DTL     |       |    600 |
            | Equity:Earnings:CI  |       |   1260 |
            | Equity:Earnings:NCI |       |    140 |
            
            140 is then the correct answer to the seventh question.
            
        ??? solution "Question 8"
            
            The finished goods sale is a downsteam (P -> S) transaction, which means that any earning of the parent company only involves CI. The transaction can be represented as follows:
            
            | Account             | Debit | Credit |
            | ------------------- | -----:| ------:|
            | Revenues:Sales      |  2000 |        |
            | Expenses:COGS       |       |    800 |
            | Liabilities:DTL     |       |    360 |
            | Equity:Earnings:CI  |       |    840 |
            | Equity:Earnings:NCI |       |      0 |
            
            0 is then the correct answer to the eighth question.
            

--8<-- "docs/courses/afa/glossary.md"
