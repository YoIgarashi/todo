Rails.application.routes.draw do
  resources :todos, only: [:index, :show, :new, :edit]
  get 'todos/:id', to: 'todos#show'
end