class Types::DateTimeType < Types::BaseScalar
  def self.coerce_input(date_time, ctx)
    Time.zone.parse(date_time)
  end

  def self.coerce_result(date_time, ctx)
    date_time.strftime("#{date_time.day.ordinalize} %b, %Y")
  end
end