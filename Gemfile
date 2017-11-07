source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.4'

gem 'actionmailer', '~> 5.1'
gem 'actionpack', '~> 5.1'
gem 'actionview', '~> 5.1'
gem 'activemodel', '~> 5.1'
gem 'activerecord', '~> 5.1'
gem 'activesupport', '~> 5.1'
gem 'railties', '~> 5.1'
gem 'sprockets-rails'
gem 'sprockets-es6'
gem 'seed-fu', '~> 2.3.5'

gem 'pg'
gem 'puma'
gem 'sassc', require: false
gem 'uglifier'

gem 'active_model_serializers', '~> 0.8.3'

gem 'ember-rails', '0.18.5'
gem 'ember-source'
gem 'ember-handlebars-template', '0.7.5'
gem 'barber'

gem 'message_bus'

gem 'sidekiq'
# for sidekiq web
gem 'tilt', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

