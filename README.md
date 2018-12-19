# USGS Visualization Portal
A beta of the USGS WorldWind visualization project. This repository provides users access to various existing data sets hosted online and allows them to project these data simultaneously onto NASA's open-source 3D globe (NASA WorldWind).

# Hosting
Project is currently hosted at: 
http://prd-tnm.s3.amazonaws.com/test/infrastructure/index.html  

# Usage (Tutorial)
-**Layer Control**: Allows users to manipulate the visibility and opacity of the data that is already loaded onto the globe. Comes with exact search functionality and metadata links associated with each data layer on the globe.

-**Retrieve Layer**: Allows users to load in data that is available online into the globe. After the layers are loaded, they will be available in the **Layer Control** menu. By not loading in all of the available data from the beginning, we prevent cluttering and help ensure practical efficiency.

-**Identify Legends**: Lists all of the legends of active layers that are currently displayed on the globe. Currently, only WMS layers have legends.

# Future Contributions
-Add legends for non-WMS layers when available

-Investigate rendering inconsistencies. Sometimes, loaded layers may take up to a minute to fully render. This rarely happens with basic layers like Blue Marble and USGS Topo Map, but can occasionally happen and should be investigated and prevented in the future.

-Modify the UI to group layers that together tell a story. _Might have to consult specialists to discover which groupings are most appropriate_.

-Implement new Layer Toggle features that optimize the user experience when working with multiple layers simultaneously.

# Credits
Beta Created by: Devansh Raizada Vaid, _devanshvaid@berkeley.edu_

Under the Employment of: Jonathan Stock, _jstock@usgs.gov_

With Assistance From:
- Amber Wittner, _awittner@usgs.gov_
- Rick Brown, _reb@usgs.gov_
- Elizabeth Huselid, _ehuselid@usgs.gov_
