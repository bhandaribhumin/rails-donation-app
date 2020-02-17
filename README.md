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



## Table of Contents

  - [Getting Started](#getting-started)
  - [Developer Guide](#developer-guide)
  - [References](#references)

## Getting Started

clone repo:

```ruby
git clone https://github.com/bhandaribhumin/rails-donation-app.git
```

Then run:

```ruby
bundle install
```

Then run:

```ruby
rails s
```

## Developer Guide
    `user guide CLI`
    1. generate model(interface) for 
    ```ruby
    rails g model User email password_digest 
    ```
    2. updte model changes
     ```ruby
     rails db:migrate
    ``` 
    3. generate scaffold (controller)
    ```ruby
    rails g scaffold <ClassName> <parameters>
    rails g scaffold Artist name:string user:refrences
    rails g scaffold Record title:string year:string artist:references user:references
    ``` 
    4. Destroy scaffold 
    ```ruby
    rails d scaffold Artist
    ```

## References
    [JWT Sessions](https://github.com/tuwukee/jwt_sessions)

