module Types
  class QueryType < Types::BaseObject
    # /users
    field :users, [Types::UserType], null: false

    def users
      User.all
    end

    # /user/:id
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    field :current_user, Types::UserType, null: true

    def current_user
      raise GraphQL::ExecutionError, "You need to authenticate to perform this action" if context[:current_user].nil?
      context[:current_user]
    end
  end
end
