---
authors: Giacomo, Peter, Stefano, Sébastien
---

# Business Intelligence exam questions

## Multiple-choice questions


!!! question
    What kind of data brings the most value to your company?
    
    - [ ] Descriptive
    - [ ] Diagnostic
    - [ ] Prescriptive
    - [ ] Predictive
    
    ??? answer
        C

!!! question
    Which proposal is not a type of BI organization for your company?
    
    - [ ] Fully centralized
    - [ ] Decentralized with consolidation
    - [ ] Decentralized with governance
    - [ ] Fully decentralized
    
    ??? answer
        D  
        <!-- both B and C are a way to share either the bottom or the top, should not be "BI hero" with full decentralization -->
        
        

!!! question
    Which of these groups of companies is the most data driven?
    
    - [ ] GAFA
    - [ ] NATU
    - [ ] BATX
    - [ ] MISO
    
    ??? answer
        B
        <!-- Microsoft, IBM, SAP, Oracle are the pioneers, Google Amazon Facebook Apple were not so data driven -->


!!! question
    Which of these skills are not mandatory in a BICC?
    
    - [ ] Innovation skill
    - [ ] Business skills
    - [ ] Analytical skill
    - [ ] IT skills
    
    ??? answer
        A

!!! question
    Which of these charts should you use to visualize 4 metrics at a time in MicroStrategy?
    
    - [ ] Heat map
    - [ ] Line chart
    - [ ] Bubble chart
    - [ ] Network chart
    
    ??? answer
        C
        
        <!--
        A: 2 variables (size, color)  
        B: 1 variable (horizontal)  
        C: 4 variables (horizontal, vertical, size, color)  
        D: 2 variables (size, color)  
        -->


!!! question
    Which proposal is the third level in the knowledge pyramid?
    
    - [ ] Data
    - [ ] Knowledge
    - [ ] Information
    - [ ] Wisdom
    
    ??? answer
        B
        
        <!--
        A: 1st  
        B: 3rd  
        C: 2nd  
        D: 4th  
        -->

!!! question
    Which of these data transformations performed by an ETL tool is not an active one?
    
    - [ ] Aggregation
    - [ ] Join
    - [ ] Filter
    - [ ] Sort
    
    ??? answer
        D
        
        <!--
        All the others are active as they modify the number of entries
        -->


!!! question
    Which of these terms is not part of an E/R conceptual data model?
    
    - [ ] Dimension
    - [ ] Entity
    - [ ] Relation
    - [ ] Cardinality
    
    ??? answer
        A


!!! question
    Which data layer is the most denormalized in a BI information system?
    
    - [ ] Operational Data Store
    - [ ] Data Warehouse
    - [ ] Data Mart
    - [ ] Data Lake
    
    ??? answer
        C
        
        <!--
        Operational data store: instance of data sources, since the ERP is normalized, it is also  
        Data Warehouse and Data Lake are in the middle  
        Data Mart is the last one, it can be denormalized because  
        -->
        

!!! question
    Which of these data models is the most efficient to update data?
    
    - [ ] Star model
    - [ ] Snowflake model
    - [ ] Top model
    - [ ] 3rd normal form
    
    ??? answer
        D

!!! question
    Which of these acronyms is not a data source for a BI information system?
    
    - [ ] ERP
    - [ ] CRM
    - [ ] EPM
    - [ ] MDM
    
    ??? answer
        C


!!! question
    Which of these acronyms is used to feed a BI information system?
    
    - [ ] EAI
    - [ ] ETL
    - [ ] ERP
    - [ ] EPM
    
    ??? answer
        B

!!! question
    Which proposal is not associated to the level 1 of Business Intelligence maturity?
    
    - [ ] Push mode
    - [ ] Alerting and mobility
    - [ ] Slice and dice
    - [ ] Dashboards and scorecards
    
    ??? answer
        C

!!! question
    Which of these OLAP is the most adapted to forecast and simulation?
    
    - [ ] MOLAP
    - [ ] ROLAP
    - [ ] HOLAP
    - [ ] DOLAP
    
    ??? answer
        A


## Open-ended questions

<!--
### Agile methodologies
### Data modeling
### Fundamentals
### Segmentation

-->

!!! question
    What are the four types of analysis to go from data to actions?
    
    ??? answer
        In increasing order of complexity and added value:
        
        1. Descriptive: what happened? e.g. In Decembers the sales were W
        2. Diagnostic: why it happened? e.g. In Decembers the sales were W because of X
        3. Predictive: what will happen? e.g. In Decembers the sales were W because of X, hence the sales in January will be Y
        4. Prescriptive: what I should do? e.g. In Decembers the sales were W because of X, hence the sales in January will be Y, so Z should be done

!!! question
    What does SMAC stands for?
    
    ??? answer
        This acronym stands for:

        - Social: analysis of social media has now become a major stake for companies
        - Mobile: maintenance workers, quick access, access anywhere, interaction capabilities, 
        - Analytics: extension of traditional BI to big data analytics 
        - Cloud: from the least to the most added value DaaS (e.g. Twitter APIs), IaaS (e.g. data centers), PaaS (e.g. AWS, Azure, GCP), SaaS (e.g. software ready to use)



!!! question
    What are the main skills that a BICC should have?
    
    ??? answer
        A BICC should include:
        
        - Business skills: explain the needs of the company
        - Analytic skills: know how to model data, build predictive models, make it speak
        - IT skills: take care of their own needs and implement business needs
        
!!! question
    What are the shared characteristics of all agile methods that can be applied to BI projects?
    
    ??? answer
        Agile methodods are:
        
        - Incremental: add small improvements to the MVP
        - Iteractive: based on frequent feedback
        - Adaptive: improve the way of work via retrospection

!!! question
    What are the three dimensions of an agile project?
    
    ??? answer
        They are:
        
        - Time: deadline for delivery
        - Cost: point assigned to each task to complete
        - Scope: perimeter to cover the solution

!!! question
    What are the elements of the Scum method?
    
    ??? answer
        They are:
        
        - Product Owner: defines acceptance criteria
        - Scrum Master: coordinates the meetings
        - Scrum Team: carries out the tasks
        - Daily Meetings: recap on the previous day and team sync on what is going to be done the same day
        - Backlog: collection of user stories not yet taken in consideration
        - Sprint Progress: status of completion of user stories taken in consideration
        - Sprint Demo: show and validate MVP, ask feedback from the client
        - Sprint Retro: review, inspection and adaptation of team work mode, try to find room for improvements for the next skills         

!!! question
    What are the fundamentals of BI? 

    ??? answer
        They are:

        - Data integration: physical flows and containers of data from the source system to the final users
        - Data modeling: physical representation of systems and their elements
        - Data presentation: relational or multidimensional display of data

        Data analisys comes after these fundamentals have been implemented

!!! question
    Where are the different steps of ETL used?
    
    ??? answer
        1. Extract: between DS and ODS
        2. Transform: between ODS and DWH, to obtain ER storage
        3. Load: between DWH and DM, to obtain ROLAP (stars and snowflakes) and MOLAP (supercubes) models

!!! question
    What are the three storage layers in a standard BI system?
    
    ??? answer
        Data storage in a BI system follows an ETL flow that includes:
        
        1. Operational Data Store: staging area between business apps and the data warehouse (data is extracted)
        2. Data Warehouse: long term storage of data (data is transformed and normalized)
        3. Data Marts: end user access point to data (data is loaded from the data warehouse)

!!! question
    What is Master Data Management used for?
    
    ??? answer
        MDM should contain immutable reference data, such as the list of countries, subsidiary codes, historical list of customers...  
        It is used to aggregate data from other datasources.

!!! question
    What is BI segmentation as intended in the course?
    
    ??? answer
        Segmentation is the different levels of BI maturity of a company, and each one of them require a different solution:

        1. pull mode: self service BI
        2. push mode: standard dashboards and alerts
        3. analysis mode: slice, dice, drill multidimensional data
        4. EPM: planning, budgeting, gap analysis, simulation and reforecast
        5. Big Data extension: data science and advanced analytics

        

!!! question
    How can a company adapt its BI system to handle Big Data?
    
    ??? answer
        The company should implement a Data Lake where it can spill Big Data into.
        Once there, some data _evaporates_ in the Data Warehouse after certain time.
        The DL also allows for data mining through AI to obtain either supervised learning (predefined categories, e.g. X and Y when doing a regression or data classification) and unsupervised learning (e.g. clustering)

!!! question
    What are the two main approaches/school of thought to build a BI system?
    
    ??? answer     
        Bill Inmon (top-down approach): start by conceptually designing the DWH from the DS (requires to predict the actual and future needs of the company), and from this design the DM accordingly.  
        This approach is best suited for large and stable companies.
        
        Ralph Kimball (bottom-up approach): start by designing the DM (stars and snowflakes) according to the business needs, and from this design the DWH.  
        This approach is the best for new or dynamic companies.
        
!!! question
    What are the two most used Data Mart configurations?
    
    ??? answer
        Multidimentional OLAP (MOLAP) stores the data in supercubes, while Relational OLAP (ROLAP) does it in relational, star or snowflake form.
        
         With MOLAP, each axis intersection is precalculated. It is fast but only if it handles a small amount of data. Companies create their EPM assumptions using MOLAP and since it allows them to test hyphotesis and scenarios.  
         MOLAP is more oriented in scenario comparison at an aggregated level (it would be too costly to compute every row combination).
        
        With ROLAP, there are links between tables, and the model is adapt when there is a big amount of data to manage. For this reason the earliest adopters were financial, retailers and telecomunication companies. However, adding assumptions and whatif scenarios to ROLAP is not easy, and this remains the main drawback of this format.  
        ROLAP is more oriented in descriptive analytics.
           
		
!!! question
    What are the first two steps in the EPM process?
    
    ??? answer
        The first step is performed annually, and consists in defining and building the annual plan. It takes as input the last month of the last period, and generates an output for the first month of the next period.
        
        The second step is performed monthly and consists in measuring the gap between forecasted and actual plans. These gaps will be then analyzed and reforecasted in following steps.
        
!!! question
    What are the three main features of Big Data?
    
    ??? answer
        The main features of Big Data are:
        
        - Volume: in terms of occupied storage, often require a distributed filesystem
        - Velocity: collection and updates may happen in real-time
        - Variety: data could be coming from internal or external sources, and be structured or unstructured
        
!!! question
    How does a Data Lake differ from a Data Warehouse?
    
    ??? answer
        In a DWH, stored data is structured and arranged vertically according to dimensions, hierarnchies and levels. The DWH consist of relational databases that can host terabytes of data.
	    
	    In a DL, stored data is often unstructured and stored horizontally. The DL consists of a distributed filesystem and a noSQL database that can host exabytes of data.
        
!!! question
    What are two predictive models of supervised machine learning?
    
    ??? answer
        Supervised ML can be obtained by  predefining categories, such as the ones to use in classification or the variables of a regression analysis (linear, logistic, ARIMA...)
        


!!! question
    Give 2 business examples of jobs in companies where Business Intelligence is bringing a real added value when it is used on mobile devices (such as smartphones or tablets).
    
    ??? answer
        - Field worker: they need to rely on the real-time information, accessible by their smartphone
        - Manager: they check their smartphone for quicker view of a report or a dashboard

!!! question
    Give 2 business examples where Business Intelligence is using some methods and tools from Artificial Intelligence (like machine learning for predictive or prescriptive analytics).
    
    ??? answer
        - In online marketing, machine learning detects the patterns of a user to show them better (targeted) advertising
        - Banks detecting fraud due to some out-of-order/suspicious activities and alerting the client

!!! question
    You are the chairman of a multinational company and you want to improve the Business Intelligence maturity level of your enterprise. You want to transform your organization from a very siloed approach where some BI heroes are located in different departments of the company, to a more transverse and consolidated approach where you can decrease the costs and increase the efficiency of Business Intelligence projects. What will be your proposal for:  
    
    - the target BI organization of your company and associated sponsor/head of this new BI organization  
    - the required skills in this new BI organization
    
    ??? answer
        Enterprise at a higher level of maturity should have integrated process. To allow a more transverse and consolidated view of the company a dedicated team should work between departments in a Business Intelligence Competency Center (BICC). It allows to decrease the costs as there is no duplicated work and less external consulting, and to increase the efficiency as they can provide the managers with the right information. The associated sponsor should be a chief data officer
        
        For a BICC to work efficiently the team should have 3 different types of knowledges:
        
        - Business (understand business as a whole)
        - IT (support operational system)
        - Analytical (statistical skills)

!!! question
    You want to build a decision support system for your company, using the scrum agile method.  
    This system will provide 3 key performance indicators (Return on Investment for Finance, Net Promoter Score for Marketing, and On-Time Delivery for Supply Chain).  
    The system requires 3 data layers: first an Operational Data Store to collect the data from various sources, then a Data Warehouse to store the data, and finally some Data Marts to present key performance indicators to the managers through dashboards.  
    You have 3 sprints to deliver the whole system.  
    What will be the MVP of each sprint and why?
    
    ??? answer
        Since the three KPIs are more independent than the three components of the BI system, by delivering a single KPI, one third of the business would be satisfied.  
        By dividing the sprints in KPIs, in the first sprint I would allocate the minimum amount of resources needed to fully deliver the first KPI (so the BI system should work at least for it).  
        During the second sprint I would add the data and infrastructure needed to deliver the second KPI, and the same would apply for the third sprint.

!!! question
    What are the main advantages and disadvantages of querying directly on source systems?
    
    ??? answer
        Advantages:
        
        - architecture simplification (easier to manage and maintain)
        - cost reduction (no intermediate interfaces to create)
        - time saving (no intermediate interfaces to send)
        
        Disadvantages:
        
        - sources are strongly coupled to BI (difficult to manage and maintain)
        - warning on source modifications (synchronization and coordination)
        - warning on performance impact (source systems may slow down)
        
        The direct coupling between upstream operational/transactional source systems and the downstream Business Intelligence system should thus be used with
        parsimony.
        In most cases it is preferred to use intermediate interfaces to avoid coupling.

!!! question
    What are the main data transformations available during an integration process?
    
    ??? answer  
        Active data transformations (number of records is changing):
        
        - filters
        - routers
        - joins
        - aggregations
        - ranks
        
        Passive data transformations (number of records is not changing):
        
        - operations on characters and strings
        - operations on dates and types
        - operations on numerical data (calculations)
        - lookups (searches)
        - sorts (ordering)

!!! question
    Our school wants to monitor what is said on social media (mainly Facebook, Twitter and Linkedin) regarding the e-reputation of the different programs, and would like to identify, catch and analyze what are the MOOCs and online streaming video courses that the students are watching on the web, in addition of the courses provided at school.  
    
    What do you need to add to your BI system to take in account this new type of analysis, and why?  
    
    ??? answer
         We need to add a Data Lake to deel with volume, variety and velocity of this new kind of data.


## Exercises

<!--

### SQL
### Data modeling
### Agile methods
-->

!!! exercise
    What is the result of a full join between these 2 datasets?
    
    | Client ID | Client name | City ID |
    | --------- | ----------- | ------- |
    | 001       | Bernard     | 1       |
    | 002       | Martin      | 2       |
    | 003       | Robert      |         |
    | 004       | Richard     | 3       |
    | 005       | Simon       | 1       |
    
    
    | City ID | City name |
    | ------- | --------- |
    | 1       | Paris     |
    | 2       | Lyon      |
    | 3       | Marseille |
    | 4       | Lille     |

    ??? solution
        
        A full (outer) join results in all the rows to appear in the final table, regardless if they have empty columns:
        
        | Client ID | Client name | City ID | City name |
        | --------- | ----------- | ------- | --------- |
        | 001       | Bernard     | 1       | Paris     |
        | 002       | Martin      | 2       | Lyon      |
        | 003       | Robert      |         |           |
        | 004       | Richard     | 3       | Marseille |
        | 005       | Simon       | 1       | Paris     |
        |           |             | 4       | Lille     |

!!! exercise
    ESC Clermont Business School wants to improve its Business Intelligence maturity level through the implementation of a new decision support system, in order to become one of the most data-driven organization in the world.    
    
    First, the top management would like to analyze the number of students, whatever their status (prospects, enrolled students or alumni) that the school has per program (Bachelor, Master in Management, Master of Science, etc) over time (per semester and per year), as well as their minimum, maximum and average age, minimum, maximum and average tuition fees, per city, country and continent in the world (Europe, America, Africa, Asia, etc).  
    
    Moreover, the top management would also like to assess the performance of each academic program, per module and per type of professors (full time, associate or affiliate), knowing that a module can belong to only one program, but can be taught by one or several professors, and knowing that each professor can teach one or several modules, but is belonging to only one department of the school (FEDS, HOM or I&D).  
    
    Every semester and every year, for each module, professor and department, all the programs will be evaluated through the number of hours, the minimum, maximum and average student grades (scores given by the professors), as well as the minimum, maximum and average student ratings (assessement provided by the students).  
    
    Create the 2 different OLAP snowflake data models used in the Data Marts of the future BI system.
    
    ??? solution
        ```mermaid
        classDiagram
         Students -- City
         Students -- Program
         Students -- Semester
         Students -- Status
         City -- Country
         Country -- Continent
         Semester -- Year
        
         class Students{
          idCity
          idProgram
          idSemester
          idStatus
          ageAvg
          ageMax
          ageMin
          tuitionAvg
          tuitionMax
          tuitionMin
         }
        
         class City{
         }
        
         class Country{
         }
        
         class Continent{
         }
        
         class Program{
         }
        
         class Status{
         }
        
         class Semester{
         }
        
         class Year{
         }
        ```
        
        ```mermaid
        classDiagram
         Program -- Module
         Program -- Semester
         Module -- Professor
         Professor -- ProfessorType
         Professor -- Department
         Semester -- Year
        
         class Program{
          idModule
          idSemester
          hours
          gradeAvg
          gradeMax
          gradeMin
          ratingAvg
          ratingMax
          ratingMin
         }
        
         class Department{
         }
        
         class Module{
         }
        
         class Professor{
         }
        
         class ProfessorType{
         }
        
         class Semester{
         }
        
         class Year{
         }
        ```

!!! exercise
    
    In order to put a Business Intelligence system in place for the next intake in October 2021, the IT department of the school has decided to use an agile method, knowing that some requirements are still very fuzzy.  
    You know that you have only 10 months before the intake, each month having 20 working days. The overall backlog of the project has been evaluated around 1500 story points. Each iteration (sprint) of the project will last 4 weeks (meaning 20 working days). The first and last days of each sprint will be of course dedicated to agile ceremonies.    
    Each member of the agile project team will be able to deliver 2 story points per day, whatever the sprint. We assume that each of them will be missing 3 working days per sprint, because they are not dedicated to the project.  
    
    How many people are required in the agile project team to deliver the full backlog in 10 months?  
    
    ??? solution
        The team must deliver 1500p/10s = 150 points per sprint.  
        The effective working days in a sprint for each member are 20d/s - 2d/s (ceremonies) – 3d/s (missing days) = 15 days per sprint.  
        Each person can deliver 2p/d * 15d/s = 30 points per sprint.  
        The minimum number of people required to deliver the project in time is 150p/s / 30p/s = 5.  
    
    ---
     
    What will be the velocity of this agile project team (number of story points delivered by sprint)?  
    
    ??? solution
         The team can deliver 30p/s * 5 = 150 points per sprint.
    

--8<-- "docs/courses/bi/glossary.md"
