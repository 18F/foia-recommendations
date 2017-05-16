require 'pp'
require 'json'

module Jekyll
  class AgencyJsonGenerator < Generator
    safe true

    DEFAULT_YAML_DIR = __dir__ + '/../../../../2015-foia/contacts/data'
    OUTPUT_DIR = 'assets'
    OUTPUT_FILE = '_site/' + OUTPUT_DIR + '/agencies.json'

    def generate(site)
      agencies = load_yaml_files(ENV.fetch('FOIA_AGENCY_DIR', DEFAULT_YAML_DIR))
      write_page(agencies)
      site.pages << Page.new(site, site.dest, OUTPUT_DIR, File.basename(OUTPUT_FILE))
    end

    def load_yaml_files(dir)
      agencies = {}
      Dir.glob("#{dir}/*.yaml") do |yml|
        #puts "=========================================== yml: #{yml}"
        agency = YAML.load_file(yml)
        #pp agency
        load_agency(agencies, agency)
      end
      #pp agencies.keys
      agencies
    end

    def load_agency(agencies, agency)
      departments = agency['departments']
      if departments.count == 1
        agencies[agency['name']] = departments[0]
      else
        departments.each do |dept|
          if dept['top_level'] == true
            name = agency['name']
          else
            name = "#{agency['name']} - #{dept['name']}"
          end
          agencies[name] = dept
        end
      end
    end

    def write_page(agencies)
      FileUtils.mkdir_p(File.dirname(OUTPUT_FILE))
      File.open(OUTPUT_FILE, 'w+') do |file|
        file.write agencies.to_json
      end
    end
  end
end
