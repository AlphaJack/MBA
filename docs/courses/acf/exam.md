---
authors: Giacomo, Matteo, Edoardo, Artur, Luca, Viola, Fabio
---

# Advanced Corporate Finance exam questions

<!--
## Forecasting
-->

## Valuation frameworks

<!--
### Questions
-->

<!--
#### Buttignon
-->


!!! question
	Why are market multiples relevant in the valuation process?  
	Discuss the point using, if possible, your case study example.
	
	??? answer
		Using market multiples is very relevant in the valuation process of a firm. The reason is that DCF models, even if they are very flexible and accurate methods based on a deep strategic and financial aniysis, are very much subject to subjective assumptions (like the growth of revenues, the dynamic of Trade working capital, CAPEX and many other items). 
		
		So it is better to complement DCF methods with the results of the market multiples analysis, in order to increase the reliability, the accuracy and the plausibility of the results.  
		The analysis of market multiples id based on the processing of the information of the market regarding the relationship between the value of a firm (based on the market value) and their underlying economic performance.  
		Analysts should carefully select a list of CLC (comparable listed companies), calculate the value of these companies and analyze their performance. Afterwards, they should calculate their market multiples and analyze them in relation with their economic performance, in order to understand if there is a strong or weak relation between them.  
		
		The best multiples to use are EV/EBITA, EV/NOPLAT, because they focus solely on the company's operating performance.  
		EV/EBITDA used to be another reliable multiple, but however with the new IFRS 16 its reliability has decreased. Other possible multiples are EV/Sales (generally unreliable, but sometimes reliable for companies with negative profit or in unstable industries), P/E (very distorted, because it mix operating performance, capital structure and non-operating items), EV/EBIT (not so reliable, because it includes amortization of intangible assets). In addition, there may exist also operating multiples specific of determined industries (e.g. related to the barrels of oil or to the seats in planes).  
		
		In our case study (Safilo), thanks to a general analysis of market multiples we were able to understand that the company was not performing as well as its peers in term of multiples. The implementation of this analysis was difficult, because the underlying performance of Safilo was particularly negative. Moreover, the truly comparable companies are not listed.  


!!! question
	What is ROIC and what is its formula?
	
	??? answer
		Return on invested capital is the amount of money a company makes that is above the average cost it pays for its debt and equity capital. Comparing a company's return on invested capital with its weighted average cost of capital (WACC) reveals whether invested capital is being used effectively.  
		If ROIC is greater than the WACC the company creates value.  
		ROIC is calculated through the following formula:
		
		$$
		\begin{split}
		\text{ROIC} &= \frac{\text{NOPAT}}{\text{Invested Capital}} \\
		&= \frac{\text{Net income} - \text{Dividends}}{\text{Debt} + \text{Equity}}
		\end{split}
		$$


!!! question
	What does "ROIC without goodwill" represent and how is it calculated?
	
	??? answer
		ROIC without goodwill measures the company's ability to create value over and above premiums paid for acquisitions. Goodwill is part of the financial capital, so excluding it from the formula, we can see if the company is able to generate value based only on its operating capital.  
		It is calculated through the following formula:
		
		$$
		\text{ROIC}_{\text{No GW}} = \frac{\text{NOPAT}}{\text{Invested Capital} - \text{Goodwill}}
		$$
		

<!--
#### Ours
-->

## Cost of capital

<!--
### Questions
-->

<!--
#### Buttignon
-->

!!! question
	What is WACC and how is it calculated?
	
	??? answer
		The weighted average cost of capital (WACC) represents a firm's average cost of capital from all sources, including common stock, preferred stock, bonds, and other forms of debt.  
		It is calculated through the following formula:
		
		$$
		\text{WACC} = k_{d}\frac{\text{D}}{\text{EV}}(1-t) + k_{e}\frac{\text{E}}{\text{EV}}
		$$
		
		Where:
		
		- D/EV is target level of debt to value using market-based values
		- E/EV is target level of equity to value using market-based values
		- Kd is the cost of debt
		- Ke is the cost of equity
		- t is the company marginal income tax rate

!!! question
	What is the relationship between $\beta_{e}$ (equity beta) and $\beta_{u}$ (unlevered beta)?
	
	??? answer
		Beta represents a stock's incremental risk to a diversified investor, where risk is defined as the extent to which the stock moves up and down in conjunction with the aggregate stock market.  
		
		Equity beta is the variation according to its sensitivity due to market changes (equity + debt), while unlevered beta is the risk due solely to company assets, without taking into account the debt.


!!! question
	How can you explain why the discount rate applied by VC investor is much higher than the cost of capital estimated trough a market model (as the CAPM)?
	
	??? answer
		It depends on the stage of financing: an early-stage investment is riskier relative to a late-stage investment and will thus require a much higher discount rate. Another explanation can be that if the VC fund expects the terminal value to be lower than the projected one, by increasing the discount rate it takes into account this expectation (without arguing with the entrepreneur about the "real" terminal value).   
		A higher discount rate simply adjusts the estimation about the terminal value.


<!--
#### Ours
-->

<!--
## Continuing value
-->

## Multiples

<!--
### Exercises 
-->

!!! exercise
	Complete the following exercise about value driver multiples.
	
	??? summary "Data"
		| Entry               |                Value |
		| ------------------- | --------------------:|
		| Sales               |                 5000 |
		| EBITDA margin       |                  15% |
		| EBITDA              | <input type="text"/> |
		| Depreciation        |                  150 |
		| Depreciation/EBITDA | <input type="text"/> |
		| EBITA               | <input type="text"/> |
		| Tax rate            |                  30% |
		| Taxes               | <input type="text"/> |
		| NOPAT               | <input type="text"/> |
		| Invested capital    |                 3000 |
		| RONIC               | <input type="text"/> |
		| g                   |                   2% |
		| WACC                |                   8% |
		| EV/NOPAT            | <input type="text"/> |
		| EV/EBITA            | <input type="text"/> |
		| EV/EBITDA           | <input type="text"/> |
		| EV/Sales            | <input type="text"/> |
	    
    ??? solution
	    The objective is calculating the four multiples at the end.  
	    This is used compare the company with other ones.  
	    
	    The procedure is the following:
	    
	    1. The first step is calculating the EBITDA by multiplying Sales for the EBITDA margin. 
	    2. The depreciation on EBITDA is self explanatory, but it won't be needed for the remaining part of the exercise
	    3. The EBITA is found by subtracting the depreciation to the EBITDA
	    4. The amount paid in taxes is given by the product between the corporate tax rate and the EBITA
	    5. The NOPAT is obtained by subtracting the amount paid in taxes to the EBITA
	    6. The RONIC is given by dividing the NOPAT for the total invested capital
	    7. The EV/NOPAT is given by the following formula using the WACC, growth rate of NOPAT (g) and investment rate (g/RONIC):
		    
		    $$
		    \frac{\text{EV}}{\text{NOPAT}} = \frac{1 - \frac{g}{\text{RONIC}}}{\text{WACC}-g}
			    $$
		
	    8. The EV is found by multiplying the EV/NOPAT by NOPAT. It can be then divided by Sales, EBITA and EBITDA to find  the other multiples
		
	    
		At the end, the table looks like this:
        
        | Entry               |     Value |
        | ------------------- | ---------:|
        | Sales               |      5000 |
        | EBITDA margin       |       15% |
        | EBITDA              |   **750** |
        | Depreciation        |       150 |
        | Depreciation/EBITDA |  **0.20** |
        | EBITA               |   **600** |
        | Tax rate            |       30% |
        | Taxes               |   **180** |
        | NOPAT               |   **420** |
        | Invested capital    |      3000 |
        | RONIC               |  **0.14** |
        | g                   |        2% |
        | WACC                |        8% |
        | EV/NOPAT            | **14.29** |
        | EV/EBITA            |    **10** |
        | EV/EBITDA           |     **8** |
        | EV/Sales            |   **1.2** |

<!--
	    8. The EV/EBITA is given by the following formula using EV/NOPAT:
		    
		    $$
		    \frac{\text{EV}}{\text{EBITA}} = \frac{\text{EV}}{\text{NOPAT}} \times (1 - \text{Tax rate})
			    $$
		
	    9. The EV/EBITDA is given by the following formula using EV/EBITA:
		    
		    $$
		    \frac{\text{EV}}{\text{EBITDA}} = \frac{\text{EV}}{\text{EBITA}} \times \left(1 - \frac{\text{Depreciation}}{\text{EBITDA}}\right)
			    $$
		
	    10. The EV/Sales is given by the following formula using EV/EBITDA:
		    
		    $$
		    \frac{\text{EV}}{\text{Sales}} = \frac{\text{EV}}{\text{EBITDA}} \times \text{EBITDA margin}
			    $$
-->

!!! exercise
	Calculate the EV/EBITDA multiple in the following example.   
	Assume a steady state situation with RONIC=ROIC.    
	Note that not all values are relevant.  
	
	??? summary "Data"
	
	    | Entry                  | Year 0 | Year 1 |
	    | ---------------------- | ------:| ------:|
	    | Sales                  |        |   1000 |
	    | Gross margin           |        |    400 |
	    | EBITDA                 |        |    200 |
	    | EBITA                  |        |    120 |
	    | Net income             |        |     50 |
	    | Invested capital       |    800 |        |
	    | Net financial position |    300 |        |
	    | Equity                 |    500 |        |
	    | Tax rate               |        |    30% |
	    | Expected growth rate   |        |     3% |
	    | WACC                   |        |     7% |
	
	??? solution
		
		In this case the EV/EBITDA is given by the following formula:
		
		$$
		\frac{\text{EV}}{\text{EBITA}} = \frac{\left(1 - \frac{\text{Depreciation}}{\text{EBITDA}}\right)\times (1-\text{Tax rate}) \times (1-\frac{g}{\text{RONIC}}) }{\text{WACC} - g}
			$$
		
	    Under the steady state situation hyphotesis, the RONIC is obtained with the ROIC formula:
		
		$$
		\text{ROIC} = \frac{\text{NOPLAT}}{\text{IC}}
			$$
		
	    The procedure is the following:
	    
	    1. The first step is calculating the depreciation by subtracting the EBITA (120) to the EBITDA (200), and then compute the Depreciation/EBITDA rate (0.40)
	    2. The NOPLAT is found by multiplying the EBITA by 1 minus the Tax rate (0.30)
	    3. The RONIC is calculated by dividing the NOPLAT (84) by the Invested capital (800)
	    4. The EV/EBITDA multiple is obtained with the formula above, and is equal to 7.5:
			
		$$
		\begin{split}
		\frac{\text{EV}}{\text{EBITA}} &= \frac{(1 - 0.40) \times (1-0.30) \times (1-\frac{0.03}{0.105})}{0.04} \\
		&= 7.5 \\
		\end{split}
			$$



<!--
### Questions
-->


<!--
#### Buttignon
-->


!!! question
	Explain the idea behind multiples. Which are the most reliable multiples and why?
	
	??? answer
		The basic idea behind using multiples for valuation is that similar assets should sell for similar prices, whether they are houses or shares of stock. Multiples can be used to value non traded companies or divisions of traded companies and to see how a listed company is valued relative to peers. Companies in the same industry and with similar performance should trade at the same multiple. 
		
		Using net enterprise value to EBITA (or NOPAT) rather than a P/E eliminates the distorting effect of different capital structures, non-operating assets, and nonoperating income statement items, such as the non-operating portion of pension expense.



!!! question
	Indicate the main ratios for judging the firm's financial health.  
	
	??? answer
		The main financial indicators are:
		
		- NFP/EBITDA: a debt ratio that shows how many years it would take for a company to pay back its debt if the net debt and EBITDA are held constant
		- NFP/Equity: this indicator values in percentage terms the relative weight of the company's net financial position with respect to the equity book value
	    - Debt/EBITDA: a ratio measuring the amount of income generated and available to pay down debt before covering interest, taxes, depreciation, and amortization expenses. It measures a company's ability to pay off its incurred debt.
		- Debt/Equity: a ratio indicating the relative proportion of shareholders' equity and debt used to finance a company's assets
		- EBITDA/Interest: a financial ratio that is used to assess a company's financial durability by examining whether it is at least profitable enough to pay off its interest expenses using its pre-tax income

<!--
		- EBITA/Interest: 
		- FCF/NFP: 
-->

!!! question 
	Does the NFP/EBITDA change by applying the IFRS 16?
		
	??? answer
		With the adoption of IFRS 16, EV/EBITDA multiples are impacted because:
		
		- EV increases due to capitalisation of the present value of future lease payments (resulting in higher financial debt). This increases the NFP
		- EBITDA increases due to the removal of operational lease expenses
	    - since both terms increase, the overall effect is ambiguous, and the multiple looses reliability

!!! question
	Explain why companies with the same credit rating can have very different coverage ratios.
	
	??? answer
	    Credit ratings of agencies such as Moody's or S&P may be the same for companies with different converate ratios because some agencies may take into account variables other than coverage ratios. In fact, companies can have their coverage ratios compensated by other factors such as business profile, profitability, efficiency, leverage and financial policies.

!!! question
	What are the main factors analyzed by a Credit Rating Agency (as Moody's or Standard and Poor's) in assigning a specific rating to a company?
	
    ??? answer
        
        Moody’s on manufacturing companies:
        
        - Scale: overall depth of a company’s business, success in attracting a variety of customers, resilience to shocks
            - Revenue (20%)
        - Business profile: ability to generate sustainable earnings and operating cash flows, market position, stability of the end-markets it serves, diversity of its product offerings, effectiveness of the company’s cost structure
            - Business profile (25%)
        - Profitability and efficiency: ability to generate sustainable cash flow and maintain a competitive position, ability to invest in marketing, research, factories and personnel
            - EBIT margin (5%)
        - Leverage and coverage: financial flexibility and ability to sustain its competitive position, how much financial risk a manufacturer is willing to undertake
            - FCF/NFP (15%)
            - Debt/EBITDA (10%)
            - EBITA/Interest expense (10%)
        - Financial policy: tolerance for financial risk and commitment to a strong credit profile. Also considers debt levels, credit quality, future direction for the company, risk of adverse changes in financing and capital structure
            - Financial policy (15%)
        
        S&P on corporations:
        
        - Stand-alone credit profile
            - Anchor
                - Business risk profile
                    - Competitive position
                    - Corporate Industry and Country Risk Assessment
                        - Country risk
                        - Industry risk
                - Financial risk profile
                    - Cash flow/leverage
            - Modifiers
                - Diversification
                - Capital structure
                - Financial policy
                - Liquidity
                - Management governance
                - Comparable ratings
        - Group or government influence

<!--
#### Ours
-->


## Capital structure

!!! question
	Explain why firms have more to lose than to gain from capital structure management.
	
	??? answer
		Firms with a higher Debt/Equity ratio increase their tax saving due to the more deductible interest expenses and they obtain more managerial discipline, in the sense that managers need to be aware on how well they can manage the expenses and to save in order to repay the higher debt.  
		The cons of having a higher debt are the opportunity costs first: if you already have a lot of debt it's difficult to obtain more for exploiting other opportunities. Also the issue of investor conflicts has to be taken care of. On the other hand, having less debt can benefit the company because they can raise debt with a lower interest rate.
		

!!! question
	Illustrate the main steps in establishing a capital structure and a payout policy, including the tactical measures in the last step.  
	Hint: there are 5 steps.
	
	??? answer
		The sequential approach for establishing capital structure and payout policies is made of:
		
		1. Project and test operating cash flows (FCF)
	    2. Develop a capital structure target (TCS) based on the company risk profile and appetite
	    3. Estimate the surplus or deficit cash flow to shareholders by combining the operating cash flow and the capital structure target 
		4. Decide on the payout of cash flow surplus or financing cash flow deficit, including tactical measures, such as share repurchases, dividend payouts, share issuances, and measures to adjust the company’s debt to specified target levels.


## Private equity

<!--
### Questions
-->


<!--
#### Buttignon
-->


!!! question
	What do you mean by "governance engineering" in a private equity (PE) field? Is there some relationship with "financial engineering" and "operational engineering"?
	
	??? answer
		In governance engineering, PE investors control the boards of their portfolio companies and are more actively involved in governance than public company directors and public shareholders. Governance engineering involves creating a better alignment of incentives between managers and shareholders or providing better oversight that can limit empire building and opportunistic behavior. All of these three are value-increasing actions. These value-increasing actions are not necessarily mutually exclusive, but certain firms likely emphasize some of them more than others.

		Differences between FE, GE and OE: In financial engineering, PE investors provide strong equity incentives to the management teams of their portfolio companies. At the same time, leverage puts pressure on managers not to waste money. In governance engineering, PE investors control the boards of their portfolio companies and are more actively involved in governance than public company directors and public shareholders. In operational engineering, PE firms develop industry and operating expertise that they bring to bear to add value to their portfolio companies.


!!! question
	Describe the main protections for an investor in a venture capital transaction
	
	??? answer
		The main protections for a VC investor are hareholders' agreements, vesting of founder's shares and preferred stocks:
		
		Shareholders' agreements are the most basic way VCs protect their investments. VCs are concerned about changes in control, including:
		
		- veto power or supermajority voting rules
		- right of first offer
		- right of first refusal
		- tag-along right
		- drag-along right
		
		Vesting of founder's shares means suspending the common stock rights which are then gradually released over a period of time (step vesting) or at one time (cliff vesting).  
		Vesting prevents the entrepreneur from leaving before a certain time.  
		Vesting is sometimes also used for founder's shares owned before the first VC investment.
		
		Preferred stocks (PS) have a liquidation preference over common stock: that is, in the event of sale or liquidation of the company, PS gets paid prior than common stock. Generally the face value of PS is the cost basis the VC fund pays for the stock.  
		Convertible Preferred Stocks (CPS) can be converted at the shareholders option into common stock.  
		Redeemable Preferred Stock (RPS) is preferred stock with no convertibility into equity. It can be combined with common stock or CPS.  
		Participating Convertible Preferred Stock (PCPS) combines a position in RPS plus common stock.



!!! question
	What do we mean by “financial engineering” in a LBO transaction and what are the relationships with the other PE value levers?
	
	??? answer
		In a LBO transaction, financial engineering is a branch of finance that is in charge of valuating the target company.  
		The vast majority of the PE investors rely on gross IRR (25%) and Multiple on Invested Capital. Over 70% also incorporate comparable company multiples. In contrast, relatively few PE investors use DCF methods.  
		The valuation may be calculated through:
		
		- a five-year forecast horizon, at the end of which they typically calculate a terminal or exit value    
		- an exit or terminal value obtained from an EV/EBITDA multiple. Industry and firm size are the most important criteria they match on, with growth, margins, and geography next in importance.
	    	
		After valuing the company and its capital structure, PE investors apply two other set of charges:
		
		- governance engineering: attitude towards corporate governance meaning, decide which company to target in relation to its board of directors and if maintaining the existing management team or replace it;
	    - operational engineering: ways in which the PE investors attempt to create value for their investments and add value to their portfolio companies, such as  
			- deal selection
			- value creation strategy
			- exit strategy

!!! question
	Define corporate governance and describe the evidence of the role it can play in value creation from studies of the returns of private equity firms investing in companies.
	
	??? answer
		Governance refers to the way the company's owners and their representatives interact with the management team to create value in the long term. For example, the best private equity firms don't just recapitalize companies with debt; instead, they improve the companies' performance through improved governance. One study found that in almost two-thirds of private equity investments, the primary source of new value was improvement in the operating performance of the company relative to peers through fruitful interaction between the owners and the management team.

!!! question
	Explain which are the main steps in constructing a portfolio of businesses
	
	??? answer
		
		The main steps in constructing a portfolio of businesses are, starting from the current market value:
		
		1. Identify the perception gap -> value as is
		2. Evaluate operating mprovement opportunities -> value with internal improvements
		3. Identify potential imporvements and divestitures -> value with internal improvements and disposals
		4. Assess new growth opportunities -> value with internal improvements and disposals and growth
		5. Determine the financial strategy -> total potential value

!!! question
	Should a company operate a diversified portfolio of businesses? What are the arguments for and against?
	
	??? answer
        Arguments for:
        
        - risk diversification 
        - synergies exploitation
        - reduce the volatility of revenues
        - smoothing cash flow and different business cycles
        - stabilizing cash flow to take on more debt and related tax benefit
        - taking advantage of different business cycle in different sectors
        
        Arguments against:
        
        - difficulties in term of control and management; over diversifying can have more costs than benefits, difficulties in resource allocation
        - unexpected tax expenses if the market is different
        - internal conflicts in case some companies are more profitable than others
        - diversification may be counterproductive for shareholders if they have already diversified their portfolio



<!--
#### Ours
-->


## Debt offerings

<!--
### Questions
-->


<!--
#### Buttignon
-->

!!! question
	For which company would you think the issuance of a convertible bond makes more sense in 2017: BMW or Tesla? Explain why.
    
	??? answer
		  Convertible bonds are typically issued by companies that have high expectations for growth and less-than-standard credit ratings. The companies get access to money for expansion at a lower cost than they would have to pay for conventional bonds. Investors, in turn, get the flexibility of turning their convertible bonds into cash or stock shares. A startup company with little current revenue and rapid growth potential might be an ideal candidate for issuing a convertible bond.
		
		For example, in 2014, Tesla Motors issued $2 billion in convertible bonds to finance the construction of the Tesla Gigafactory in Nevada. Tesla had reported low or negative earnings over the few years leading up to 2014. Raising capital for the project using standard bonds would have been prohibitively expensive as investors would have demanded steep interest rates in return.With the conversion option, the interest rates on Tesla's convertible bonds ranged from 0.25% to 1.25%. By mid-2020, the first section of the Tesla Gigafactory was up and running in the Nevada desert.








## Equity offerings


<!--
### Exercises
-->

!!! exercise
	Complete the following exercise about hybrid securities/convertible bonds.
	
	??? summary "Data"
		| Entry                   |                Value |
		| ----------------------- | --------------------:|
		| Face value              |                 1000 |
		| Convertible price       |                   25 |
		| Stock price             |                   20 |
		| Number of shares        | <input type="text"/> |
		| Coupon rate             |                   3% |
		| Coupon value            | <input type="text"/> |
		| Maturity years          |                    3 |
		| Comparable yield        |                   6% |
		| Debt value              | <input type="text"/> |
		| Underlying assets value | <input type="text"/> |
		| Expected dividend rate  |                   1% |
		| Asset volatility        |                  30% |
		| Option strike price     | <input type="text"/> |
		| Option time to maturity | <input type="text"/> |
		| Risk free rate          |                   2% |
		| d1                      |                0.049 |
		| d2                      |               -0.471 |
		| N(d1)                   |                0.519 |
		| N(d2)                   |                0.319 |
		| Call option value       |                  127 |
		| Convertible bond value  | <input type="text"/> |
	
	??? solution
	    The objective is calculating the value of the convertible bond.  
	    This is a required part to decide if it's convenient or not to exercise the option.
	    
	    The procedure is the following:
	    
	    1. The first step is calculating the number of shares (that the option would originate) by dividing the face value of the convertible bond for its conversion price. 
	    2. The coupon value is obtained by multiplying the face value of the coupon for its coupon rate
	    3. The debt value is given by the sum between the actual values of each year coupons and the final reimbousement
	    
			$$
			\begin{split}
			D &= \sum_{t=1}^{\text{Maturity years}}\left(\frac{\text{Coupon value}}{(1+\text{Comparable yield})^{t}}\right) + \frac{\text{Face value}}{(1+\text{Comparable yield})^{\text{Maturity years}}} \\
			&= \sum_{t=1}^{3} \frac{30}{1.06^{t}} + \frac{1000}{1.06^3} \\
			\end{split}
			$$
		
	    4. The underlying asset value is the product between the number of shares and their (stock) price
	    5. The option strike price is the same as the debt value, while the option time to maturity is the same as the maturity years
	    6. The values of d1, d2, N(d1), N(d2) and call option value are given because calculations would be too long to be done with a simple calculator
	    7. The convertible bond value is given by the sum of the debt and the call option value
	    
	    The final table looks like this:
        
		| Entry                   |    Value |
		| ----------------------- | --------:|
		| Face value              |     1000 |
		| Convertible price       |       25 |
		| Stock price             |       20 |
		| Number of shares        |   **40** |
		| Coupon rate             |       3% |
		| Coupon value            |   **30** |
		| Maturity years          |        3 |
		| Comparable yield        |       6% |
		| Debt value              |  **920** |
		| Underlying assets value |  **800** |
		| Expected dividend rate  |       1% |
		| Asset volatility        |      30% |
		| Option strike price     |  **920** |
		| Option time to maturity |    **3** |
		| Risk free rate          |       2% |
		| d1                      |    0.049 |
		| d2                      |   -0.471 |
		| N(d1)                   |    0.519 |
		| N(d2)                   |    0.319 |
		| Call option value       |      127 |
		| Convertible bond value  | **1047** |



<!--
### Questions
-->


<!--
#### Buttignon
-->


!!! question
	Describe the price setting mechanisms in an IPO
	
	??? answer
		There are three possible price setting mechanisms in an IPO: open price, fixed price and auction.
		
		In open price (also known as book building) the issue is presented to institutional investors during a "roadshow" that takes on average a couple of weeks. A price range is then suggested to investors. Based on the roadshow presentation, investors are asked to provide non-binding indications of interest (bids). One of the key features of the open price approach is that allocation of shares among institutional investors is decided by the investment bank on a discretionary basis. There is very little underwriting risk.
		
		Fixed price was the standard practice in Europe, but it has been in decline for many years, especially for larger offerings. The key feature of the fixed price approach is that the issuer and its investment bank set the price before bids are submitted. In other words, the price is fixed with information about the market demand. There are two kinds of fixed-priced offerings: 
		
		- firm commitment (or underwritten) 
		- best effort (non-underwritten)
		
		In the first case (the most common one) the investment bank underwrites the offer, thus guaranteeing the full proceeds to the issuer, regardless of the actual demand. In the second case, the bank just puts its best effort to sell the shares, with no underwriting.
		
		Historically, auction is the least common price-setting mechanism. It was frequently used only in France. In an auction investors are invited to bid for shares, and once the offering is covered, shares are allocated at a single clearing price. As for book-building, the price is set after bids are submitted. The crucial difference between the two techniques, is that in book-building the price and allocation rules are not transparent (because they are discretionary): the bank does not have to allocate to highest bidders and may also ignore them at all.
		
		Currently the most used price-setting mechanism is book-building, at least for institutional tranches.


!!! question
	Illustrate the main benefits and costs of going public
	
	??? answer
		The main benefits of going public are:
		
		- it helps entrepreneurs to sell their company for a value higher than what they would get from a trade sale
	    - because of the dual-track process, it can help to solicitate bids from private bidders within a time frame established by the IPO process
	    - it helps the company to pursue a strategy of external growth
	    - it improves the public image of the company
	    - it allows for management compensation benefits; stock options and other similar performance-based compensation provide the right incentive to the management
	    
		The main costs are:
		
		- it disclosures requirements and compliance costs
		- it surrounds the company by authorities, analysts, institutional investors screening the firm activities
	    - it introduces corporate governance issues, that may be problematic
	    - it involves direct costs such as fees paid to lawyers, consultants and investment banks for the IPO process, not to count periodic balance sheet audits
		- it involves indirect costs such as underpricing; the amount of money that the issuer loses are the number of share issued, times the first day capital gain

!!! question
	Explain the pros and cons for issuing a convertible bond in a growing firm which actually generates negative earnings and free cash flows (as Peloton in the interactive fitness business). 
	
	??? answer
		A convertible bond is a particular type of hybrid securities. Hybrid securities are financial instruments that have both elements of Debt and Equity.  
		A convertible bond is a corporate bond that can be exchanged for common equity at a pretedermined conversion rate. So, the Convertible bond can be seen as the sum of a straight-debt compontent and an equity component (call option on equity). 
		
		Usually firms set the conversion rate in a way that the conversion price is higher than the current stock price.  
		Convertible bonds are very interesting instruments for growing firms, which may actually generate even negative earnings or FCF.  
		Convertible bonds are useful in cases of asymmetric information and in cases where there is a gap in the risk perception between the issuer and the investors. Since the two components of the convertible bond react differently to an increase in risk, convertible bonds may be very powerful instruments to brige the perception gap between issuer and investors.  
		Moreover, convertible bonds attract a certain category of investors (so issuing them may broaden the investors base), and are treated differently (for the better) by the rating agencies.  
		Finally, convertible bonds can be seen as "Cheap debt”, because usually they are issued at better terms for the issuer, with respect to normal debt. Morover, they can be also seen as "delayed equity".  
		
		So Convertibles are very interesting instruments for growing companies with negative FCF and profits, for the reasons said above.  
		However, if convertible bonds are exercised, they will dilute the equity and the control position of the existing shareholders (and their rights on the earnings).


<!--
#### Ours
-->


## Mergers and acquisitions

<!--
### Questions
-->


<!--
#### Buttignon
-->

!!! question
	In an M&A transaction how can you estimate the maximum offering price for the target firm? 
	
	??? answer
		In an M&A transaction, the maximum offering price for the target can be estimated starting from the Target Stand Alone value.  
		Then we add the value of the synergies (the value of the possible performance improvements deriving from cost, capital and revenues improvements), and we deduct the value of the intrinsic risk of the deal (so here we can include the possible dis-synergies that may derive from the deal).  
		Afterwards, we can add to this result the value of the so-called "strategic premiums", which are the sum of the strategic option and the competitors' actions prevention value. The former can be intended as a "window for opportunities” in the future, that may arise if the acquirer company realizes the deal. The latter (competitors' actions prevention value) is the value we assign to the loss that we would incur in if the competitors performed this deal.  
		So the strategic premiums are more immaterial premiums, but they still have a value. At the end we reach the maximum offering price for the target firm. 

!!! question
	What do we mean by value-at-risk in an M&A deal? 
		
	??? answer
		The value at risk in a deal is the result of this calculation: 
		
		$$
		\text{VAR} = \frac{\text{Acquisition premium paid for the target}}{\text{Equity value of the acquirer}} \times \text{Percentange of ownership of the combined entity}
		$$
		
		This is higher in a cash deal (the percentage of ownership is 100%), and lower in stock deals, where the bidder share the possible risks and rewards deriving from the deal with the target, and the percentage of ownership depends of several factors, like the exchange ratio.

!!! question
	List which are the M&A strategies that have more difficult in creating value and explain why.
	
	??? answer
		Acquisitions create value when the cash flows of the combined companies are greater than they would have otherwise been, including the acquisition premium paid by the purchaser.  
		If companies don’t adopt a rationale and strategy for an acquisition but instead use a vague concept like growth or strategic positioning, they are unlikely to create value. 
		
		Rationales could be:
		
	    - improving the performance of the target company
	    - consolidating to remove excess capacity from an industry
	    - creating market access for the target's products
	    - acquiring skills or technologies more quickly or at lower cost than they could be built in-house.
	    - exploiting a business's industry-specific scalability
	    - pick winners early and help them develop their businesses
		
		Strategies could be:
		
	    - rolling up: used to consolidate highly fragmented markets, where the current competitors are too small to achieve scale economies.
	    - consolidate to Improve Competitive Behavior: the evidence shows that unless an industry consolidates down to just three or four competitors and can keep entrants out, competitor pricing behavior does not change
	    - enter into a Transformational Merge: redefine completely the company organizational chart
	    - buy Cheap (very rare): at a price below the target’s intrinsic value.
		    - beware of multiple acquirers: the premium rises dramatically, creating the so-called winner’s curse.
	        - beware of hubris: the tendency of the acquirer’s management to overstate its ability to capture performance improvements from the acquisition.



<!--
#### Ours
-->


## Divestitures

<!--
### Questions
-->


<!--
#### Buttignon
-->

!!! question
	Explain the reasons that a parent company may not want to give up control over a business unit it wants to divest and the preferred method of divestment in this case.
	
	??? answer
		The reason could be a desire to maintain some synergies between parent and subsidiary or to shelter the subsidiary from market forces such as mergers and acquisitions. If the company does not want to give up control, it should consider a minority curve-out or possibly a tracking stock.

!!! question
	What are the potential sources of value that the best owner brings to a business?
	
	??? answer
		The best owner is the one that can generate the highest profitability and growth from a business. It can change over time as the business’s circumstances change. He can bring:
		
		- unique links with other businesses 
		- distinctive skills (marketing, production, sales...)
		- better governance (BoD: strategy and performance management...)
		- better insight and foresight
		- influence on critical stakeholders (emerging markets...)
		
		By applying the best-owner principle, executives must continually look for and acquire companies where they could be the best owner, and must divest businesses where they used to be the best owner but another company could now own better.



## Corporate restructuring

<!--
### Questions
-->


<!--
#### Buttignon
-->


!!! question
	In a distressed firm can the debt market (economic) value be lower than its face (nominal) value?  
	If so, what are the reasons? 
	
	??? answer
		In a distressed firm usually the market value of the debt of a firm is lower than its nominal value, because in these firms the risk of default is higher.   
		In fact, when valuing the debt of a distressed firm, analysts and investors have to be careful, because the value of the debt may be related to the value of the firm (instead for investmentgrade debt, the value of the debt is independent with respect to the value of the firm).  
		Usually, this kind of debt trades at a discount with respect to its face value. The amount of the discount depends on the default probability of the company on its debt. In particular cases of severely distressed companies, debt may even have to be valued with a scenario analysis or with an option pricing method.  
		
		The market value of debt is lower because companies with higher default probability have higher credit/default spreads. Default spread is higher because the gap between the promised FCF and the expected FCF of the debt increases, risk of default increases.  
		Moreover, also the credit rating of a company plays a very important role. The credit rating of a company is an opinion on the probability of default of a company and its debt. For investment grade companies, the default probability and the credit spread increase as the rating decrease, in a proportionate trend. However, for non-investment grade companies, the default spread increases in a more-than-proportional way, with respect to the default probability. This is due to the fact that the market for non-investment grade debt is smaller, and because investors in this market usually put a lot of effort in screening the companies, and thus they are remunerated through higher credit spreads.   
		In distressed firms the debt trades at a discount because the firm is not able to meet its financial obligations and service its debt payments (interests, principal). There are different levels of financial distress, which may be related with different discounts on the nominal value of the debt. A financial crisis may be related to a prior economic crisis, which can derive from poor operating performance, strategic problems, lack of efficiency in operations.  
		When a firm is in a financial distress, there are two options: Restructuring (the claimants bargain on the going concern of the firm)(Ch. 11 if in-court) or Liquidation (the assets or the going concern of the firm are sold, and the proceeds are distributed to the creditors according to the Absolute priority rule)(Ch. 7 if in-court).  
		If the going concern value of the firm is lower than the face value of its debt, but higher than the liquidation value, a restructuring plan is better]lf the going concern value is lower than the liquidation value of the firm, a liquidation procedure is necessary.  

!!! question
	How can you manage the excess debt in the restructuring process of a distressed firm?
		
	??? answer
		If there is excess debt in a restructuring process, there are three general actions firms can take, in agreeement with the creditors: the extension of the debt, the exchange of the debt for shares, the write-off of the debt.  
		For example, the extension of the debt is de-facto achieved with Ch. 11 with the "Automatic Stay" provision. Another important provision of Ch.11 procedure is the "debtor-in-possession”, which allows the firm to raise new debt (so, new cash) in order to implement the restructuring plan, which will be senior with respect to the existing debt.


!!! question
	In a financial distress situation, what are the main benefits and costs of a bankruptcy procedure vs a workout?
	
	??? answer
		Benefits in bankruptcy:
		
		- simplified voting rules which might be crucial to a successful resolution of the distress
	    
	    Costs in bankruptcy:
		
		- more expensive than workout mainly because of time
	    - longer than private workouts because of judges and dealing with all the creditors and must approve most of decisions
	    - higher direct costs (advisory and legal fees) and indirect costs (asset going-concern value reduction): any cost will depend on the length of time it takes to resolve distress


!!! question
	Describe content and role of the debtor-in-possession (DIP) financing.  
	How can you calculate the fair market value of this type of debt?
	
	??? answer
		In DIP financing the firm can issue new senior debt to outstanding debt. The firm can thus get fresh money. DIP financing represents a major source of funding to bankrupt companies and is often lined up in advance so it can be accessed the moment a company files. Because a DIP loan enters the firm's capital structure as a senior claim, ranking alongside or ahead of its prepetition debts, DIP financing offers a solution to the "debt overhang" problem. DIP financing also reduces any potential adverse impact of asymmetric information on the cost or availability of new financing to distressed companies. Companies that obtain DIP financing are more likely to reorganize successfully and to reorganize in less time than firms that do not obtain such financing. DIP financing has been historically the exclusive preserve of commercial banks.
		
		The debt is calculated as follows:
		
		$$
		D = \sum_{t=0}^{n}\frac{\text{CFD}_{t}}{(1+\text{YTM})^{t}}+\frac{\text{FV}}{(1+\text{YTM})^{n}}
		$$
		
		Where:
		
		- YTM is the sum of the risk free rate ($r_{f}$) and the risk premium of that specific bond
		- FV is the face value
		- CFD is the coupon value
		
		The risk premium in the YTM is the multiplication between the probability of default and the loss incurred when the issuer defaults.  
		The coupon value is obtained from the cost of debt $k_{d}$, that can be calculated in two ways:
		
		$$
		\begin{split}
		k_{d\ \text{CAPM}} &= r_{f} + \text{MRP} \times \beta_{d} \\
		k_{d\ \text{spread}} &= r_{f} + \text{spread} \\
		\end{split}
		$$

!!! question
	Explain the difference between the "pari passu" and the "waterflow” approach in a debt restructuring proposal
	  
	??? answer
		In the "pari possu" approach equity-holders receive at the exit an amount of proceeds based on the initial stake (e.g. 50%, 30%, 20%).  
		In the "watelflow” approach equity-holders receive of the exit an amount of proceeds based on a specific non-proportional structure.


!!! question
	Describe the operating and financial sides of distress illustrating a framework for dealing with distress.
	
	??? answer
		From the operating side, when a firm is forced to sell a subsidiary or a given asset to a third party there is a divesture. Ths can obviously lead to a reduction of operations due to the loss of the asset or the entire production plant.  
		From the financial side, a distressed firm for sure has a higher interest rate if it wants more debt, but worse financial ratios (Debt/EBITDA, EBIT/Interest expenses, Debt/EV).
		
		According to the studied framework, an irreversible distress crisis happens when the going-concern value (the value that the company is able to generate when it continues operating) is lower than the liquidation value of that company.  
		Until that point, the crisis is reversible, especially when the going-concern value is higher than the face value of debt (potential crisis).
		

!!! question
	Illustrate (better if in bullet form) a typical corporate restructuring road map.
	
	??? answer
		In a corporate restructuring, firm claimants such as creditors, managers and shareholders bargain about the future of the firm, either in court or out of it.  
		Debt is repaid based on a restructuring plan of the company that maintains its going concern. It is made of the following steps:
		
		1. Conduct financial analysis (IS, BS and FCF analysis)
		2. Prepare for restructuring (stakeholder communication plan, creditor disagreement approach)
		3. Decide the restructuring approach (debt-equity swap, transfer of assets, exchange for equity)
		4. Implement debt restructuring (employee layoff, structure changes)
		5. measure the impact (decrease in debt, increase in cashflow, financial statements improvements)


<!--
#### Ours
-->

!!! question
	What is the typical firm’s restructuring process?
	
	??? answer
		The restructuring process is either managed trough:
		
		- out-of-court workout, if management and shareholders recognize the crisi status early and decide to intervene promptly
		- in-court reorganization (bankruptcy), if out-of-court workout is not feasible
		
		The process is made of the following steps:
		
		1. Crisis identification: report on short-term liquidity, short-term debt, covenants fullfil, debt sustainability and equity health
		2. Restructuring plan: moratorium request, new business plans, indipendent business review, financial proposal arrangements
		3. Plan negotiation: consensus creation on the restructuring agreement among shareholders and creditors with different seniority
		4. Plan implementation: board approval, agreement formalization, start of either the in-court or out-of-court



!!! question
	Explain briefly in what consist the hold-out problem.
    
	??? answer
		 In the hold-out problem, claimants are unable to find an agreement and they might not approve the restructuring plan, even when this will produce a sub-optimal outcome. Factors that influence the likelihood of approval of the restructuring plan are:  
		  
		- number and sophistications of claimants
		- public debt outstanding, as every bondholder has to agree to the term changes


--8<-- "docs/courses/acf/glossary.md"
