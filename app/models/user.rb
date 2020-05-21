class User < ApplicationRecord
  has_secure_password

  before_save do
    self.email = email.downcase
    self.first_name = first_name.capitalize
    self.last_name = last_name.capitalize
  end

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 }, 
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { minimum: 6 }, allow_blank: true
  validates :first_name, :last_name, presence: true, length: { maximum: 255 }

  def self.search(search) 
    self.where(
      "lower(first_name) LIKE :search OR lower(last_name) LIKE :search OR lower(email) LIKE :search", 
      search: "%#{search.downcase}%"
    )
  end
end
