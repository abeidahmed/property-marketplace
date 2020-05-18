class Mutations::LoginUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :password, String, required: true

  field :user, Types::UserType, null: true
  field :token, String, null: true

  def resolve(email:, password:)
    user = User.find_by(email: email)

    return unless user

    found_user = user.authenticate(password)

    return unless found_user

    secret_key = Rails.application.secrets.secret_key_base
    data_to_encode = { user_id: "#{found_user.id}" }
    token = JWT.encode data_to_encode, secret_key, "HS256"

    {
      user: found_user,
      token: token
    }
  end
end