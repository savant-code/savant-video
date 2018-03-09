class Api::CoursesController < ApplicationController
  before_action :permitted_parameters, only: [:create]
  def index
    courses = Course.all
    render_json_dump(courses)
  end

  def create
    course = Course.create(@course_parameters)
    if course.save
      render_json_dump(course)
    else
      byebug
    end
  end

  private
    def permitted_parameters
      @course_parameters = params.require(:course).permit(:name)
    end
end
