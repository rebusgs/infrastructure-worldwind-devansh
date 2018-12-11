rem call aws s3 cp images s3://prd-tnm/test/infrastructure/ --recursive --acl public-read
call aws s3 cp AnsonData.txt s3://prd-tnm/test/infrastructure/ --acl public-read
call aws s3 cp index.html s3://prd-tnm/test/infrastructure/ --acl public-read
call aws s3 cp Master.csv s3://prd-tnm/test/infrastructure/ --acl public-read
call aws s3 cp USGSVisualizeSkeleton.js s3://prd-tnm/test/infrastructure/ --acl public-read