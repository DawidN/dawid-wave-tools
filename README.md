# Dawid Wave Tools package

Productivity tools when implementing Salesforce Wave Analytics

##Usage
###Open Config file
- in here specify the key value pairs that will be used for "Convert SAQL to JSON" and "Replace ID's" functions.
- Add more if needed

###Convert SAQL to JSON
- This will replace the datasetid+version with the dataset alias as specified in the config file.
- Removes line breaks
- Replaces quotes with /"

###Convert JSON format to SAQL
- changes single line JSON Format SAQL string back into a format that is readable.
- Does not currently replace aliases back to ID's.

###Replace ID's
- Replaces any key value pair as defined in the config file for the selection.
