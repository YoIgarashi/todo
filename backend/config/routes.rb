Rails.application.routes.draw do
  resources :todos, only: [:index, :show, :new, :edit]
end