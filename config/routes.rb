Rails.application.routes.draw do
  # root to: "home#index"
  
  mount_ember_app :savant, to: "/"

  post '/users/sign_in', to: "sessions#create"

  namespace :api do
    resources :courses
    devise_for :users
    devise_scope :user do
      post 'sign_in', to: "sessions#create"
    end
  end

  devise_scope :user do
    post 'sign_in', to: "sessions#create"
  end

end
