require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Savant
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1


    # Enable the asset pipeline
    config.assets.enabled = true

    config.assets.precompile += %w{
                                 vendor.js admin.js ember_jquery.js
                                 }

    config.handlebars.templates_root = 'savant/templates'

    # ember stuff only used for asset precompliation, production variant plays up

    config.ember.ember_location = "#{Rails.root}/app/assets/javascripts/savant"
    config.ember.handlebars_location = "#{Rails.root}/vendor/assets/javascripts/handlebars.js"
    config.ember.module_prefix = nil

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
