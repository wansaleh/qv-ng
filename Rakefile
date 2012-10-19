# The default, if you just run `rake` in this directory, will list all the available tasks
task :default do
  puts "Run server/guard"
  run_task "all"
end

desc "Start everything"
task :all do
  commander 'adsf', 'guard'
end

task :w => :watch
task :g => :guard

# run command(s) and capture SIGINT
def commander(*cmds)
  pids = cmds.map { |cmd| Process.spawn("bundle exec #{cmd}") }

  trap('INT') {
    pids.each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    puts '==> Stopped!'
    exit 0
  }
  pids.each { |pid| Process.wait(pid) }
end

# rerun rake task
def run_task(*tasks)
  tasks.each do |task|
    Rake::Task[task].reenable
    Rake::Task[task].invoke
  end
end
