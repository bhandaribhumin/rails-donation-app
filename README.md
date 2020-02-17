# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby 2.4.4p296 (2018-03-28 revision 63013) [x86_64-darwin18]
Rails 5.2.4.1

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite
 ```rails s```

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

* Developer Guide
```user guide CLI 
    to generate model(interface) for 
    > rails g model User email password_digest 
    to updte model changes
    > rails db:migrate 
    to generate scaffold (controller)
    > rails g scaffold <ClassName> <parameters>
    > rails g scaffold Artist name:string user:refrences
    > rails g scaffold Record title:string year:string artist:references user:references
    to destroy scaffold 
    > rails d scaffold Artist


```