#!/usr/bin/env ruby

require 'json'
require 'yaml'
require 'fileutils'
require 'pp'

class JsBuilder
  DEFAULT_YAML_DIR = __dir__ + '/../../../../2015-foia/contacts/data'
  OUTPUT_DIR = __dir__ + '/../assets/js'
  OUTPUT_FILE = OUTPUT_DIR + '/agencies.js'

  def generate
    agencies = load_yaml_files(ENV.fetch('FOIA_AGENCY_DIR', DEFAULT_YAML_DIR))
    write_page(agencies)
  end 

  def load_yaml_files(dir)
    agencies = {}
    Dir.glob("#{dir}/*.yaml") do |yml|
      agency = YAML.load_file(yml)
      load_agency(agencies, agency)
    end 
    agencies
  end 

  def load_agency(agencies, agency)
    departments = agency['departments']
    summary = agency_summary(agency)
    if departments.count == 1
      if agency['abbreviation']
        name = sprintf("%s ( %s )", agency['name'], agency['abbreviation'])
      else
        name = agency['name']
      end
      agencies[name] = departments[0]
      agencies[name]['summary'] = summary
    else
      departments.each do |dept|
        if dept['top_level'] == true
          name = agency['name']
        elsif dept['abbreviation'] && agency['abbreviation']
          name = sprintf("%s ( %s ), %s ( %s )",\
                   dept['name'], dept['abbreviation'], agency['name'], agency['abbreviation'])
        elsif agency['abbreviation']
          name = sprintf("%s, %s ( %s )", dept['name'], agency['name'], agency['abbreviation'])
        else
          name = sprintf("%s, %s", dept['name'], agency['name'])
        end 
        agencies[name] = dept
        agencies[name]['summary'] = summary
      end 
    end 
  end

  def agency_summary(agency)
    skip_keys = ['departments', 'keywords', 'request_time_stats']
    agency.reject { |k, v| skip_keys.include?(k) }
  end

  def write_page(agencies)
    FileUtils.mkdir_p(File.dirname(OUTPUT_FILE))
    File.open(OUTPUT_FILE, 'w+') do |file|
      file.write "var AGENCIES = #{agencies.to_json};"
    end 
  end
end

JsBuilder.new.generate
