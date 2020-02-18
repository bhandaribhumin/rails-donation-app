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
  - [Postgresql](#postgresql)
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

Create data using after setup [Postgresql](#postgresql)
```ruby
rails db:seed
```

To run project:


```ruby
rails s
```

open browser and goto [localhost:3000](http://localhost:3000) 


## Developer Guide

user guide CLI:

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

5. Generate Controller
```ruby
rails g controller <controller name> <method>
rails g controller signup create
```

## Postgresql 

[if error: "rails db:create"]

**To create a new role, run the following command**

```
createuser -P -d rails_donation
```
**PostgreSQL console with the following command**
```
psql postgres
```

**set the password for the new database role**
```
postgres=# \password appname
```
**exit the PostgreSQL console**
```
postgres=# \q
```

**ERROR: postgres could not connect to server /tmp/.s.pgsql.5432 mac**

*Fix using*

NOTE: `rm /usr/local/var/postgres/postmaster.pid`

## Configuring and Creating Your Database

```ruby
echo 'export RAILS_DONATION_DATABASE_PASSWORD="1234"' >> ~/.bash_profile
source ~/.bash_profile
```

## References

[postgresql setup mac](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-macos#step-4-—-configuring-and-creating-your-database)