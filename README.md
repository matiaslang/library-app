# Library Application



### <u>What is this?</u>

Library application is an application which provides user interface to access database which includes information on variety of books. The interface also makes it possible to modify and delete items in database.

This service is running live, and can be accessed here: [LibraryApplication](https://www.library.matiaslang.info)

------



Notes:

- If you wan't to create a new entry, leave the id -part empty. Then the application will create a new entry, and new id is generated. If the ID is present, then we will try to look for an entry with the same id and update that item.





TODOs:

- [ ] Authorization must be implemented (this is already present in services side, just disabled for now)

- [ ] Sometimes application does not refresh with new information. This needs to be investigated

- [ ] Proper await for api requests

  
