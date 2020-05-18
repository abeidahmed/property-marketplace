class Mutations::CreateUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :first_name, String, required: true
  argument :last_name, String, required: true
  argument :password, String, required: true

  field :user, Types::UserType, null: false

  def resolve(email:, first_name:, last_name:, password:)
    user = User.new(email: email, first_name: first_name, last_name: last_name, password: password)

    if user.save
      {
        user: user
      }
    else
      {
        user: nil
      }
    end
  end
end