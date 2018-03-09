source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use sqlite3 as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

gem 'actionmailer', '~> 5.1'
gem 'actionpack', '~> 5.1'
gem 'actionview', '~> 5.1'
gem 'activemodel', '~> 5.1'
gem 'activerecord', '~> 5.1'
gem 'activesupport', '~> 5.1'
gem 'railties', '~> 5.1'
gem 'sprockets-rails'
gem 'seed-fu', '~> 2.3.5'

gem 'devise'

gem "ember-cli-rails"
gem 'active-model-adapter-source', '~>2.0'

gem 'active_model_serializers', '~> 0.8.3'

gem 'sidekiq'
gem 'message_bus'

# for sidekiq web
gem 'tilt', require: false

# For caching
gem 'redis'
gem 'redis-namespace'

group :assets do
  gem 'uglifier'
  gem 'rtlit', require: false # for css rtling
end

group :test do
  gem 'webmock', require: false
  gem 'fakeweb', '~> 1.3.0', require: false
  gem 'minitest', require: false
end

group :test, :development do
  gem 'rspec'
  gem 'mock_redis'
  gem 'listen', require: false
  gem 'certified', require: false
  # later appears to break Fabricate(:topic, category: category)
  gem 'fabrication', '2.9.8', require: false
  gem 'discourse-qunit-rails', require: 'qunit-rails'
  gem 'mocha', require: false
  gem 'rb-fsevent', require: RUBY_PLATFORM =~ /darwin/i ? 'rb-fsevent' : false
  gem 'rb-inotify', '~> 0.9', require: RUBY_PLATFORM =~ /linux/i ? 'rb-inotify' : false
  gem 'rspec-rails', require: false
  gem 'shoulda', require: false
  gem 'rspec-html-matchers'
  gem 'pry-nav'
  gem 'byebug', require: ENV['RM_INFO'].nil?
  gem 'rubocop', require: false
end

group :development do
  gem 'ruby-prof', require: false
  gem 'bullet', require: !!ENV['BULLET']
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'annotate'
  gem 'foreman', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
