import React from 'react';
import { Award, Users, Briefcase, GraduationCap, ArrowRight, Heart, Target, BookOpen, Handshake, TrendingUp, Shield } from 'lucide-react';

export default function HRPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Culture */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-white to-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-wider text-yellow-800 uppercase bg-gradient-to-r from-[#7c533a]/20 to-yellow-500/20 border border-[#7c533a]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Human Resources
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold   leading-tight  text-[#7c533a]">
                  People-first culture, built on{' '}
                  <span className="bg-gradient-to-r from-[#7c533a] to-[#eab308] bg-clip-text text-transparent">
                    trust and excellence
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  A warm, transparent, empowering environment where people and work both thrive.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-600 mb-2 text-lg">Clear values: integrity, collaboration, outcomes</h3>
                    <p className="text-gray-600">We believe in doing the right thing, working together, and delivering results that matter.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-600 mb-2 text-lg">Real work–life balance</h3>
                    <p className="text-gray-600">Flexible schedules and genuine respect for your personal time and well-being.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-600 mb-2 text-lg">Continuous learning & sharing</h3>
                    <p className="text-gray-600">Regular knowledge sharing sessions and opportunities to grow your expertise.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="bg-gradient-to-r from-[#7c533a] to-[#eab308] hover:from-[#6e4a31] hover:to-[#facc15] text-white px-6 py-3 text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Careers
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#7c533a]/20 to-[#eab308]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Team collaboration at Akdam Group"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#7c533a]">Team Collaboration</h4>
                        <p className="text-gray-600 text-sm">Working together on innovative projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Office moments at Akdam Group"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#7c533a]">Excellence Culture</h4>
                        <p className="text-gray-600 text-sm">25+ awards, 15+ years of success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits & Growth */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-wider text-[#7c533a] uppercase bg-gradient-to-r from-[#7c533a]/10 to-[#eab308]/10 border border-[#7c533a]/20 px-4 py-2 rounded-full">
                    Benefits & Growth
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] leading-tight ">
                  Benefits that respect your time and{' '}
                  <span className="bg-gradient-to-r from-[#7c533a] to-[#eab308] bg-clip-text text-transparent">
                    fuel your growth
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Thoughtful perks and real development paths—from certifications to leadership tracks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-2 text-lg">Comprehensive health coverage & wellness</h3>
                    <p className="text-gray-600">Full medical, dental, and mental health support plus wellness programs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-2 text-lg">Sponsored learning (courses, certificates)</h3>
                    <p className="text-gray-600">Company-funded professional development and industry certifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-2 text-lg">Clear promotion paths & periodic reviews</h3>
                    <p className="text-gray-600">Transparent career progression with regular feedback and growth opportunities.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="bg-white hover:bg-gray-50 text-[#7c533a] border-2 border-[#7c533a] hover:border-[#6e4a31] px-6 py-3 text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Our Learning Programs
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Learning sessions and mentorship at Akdam Group"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#111827]">Professional Development</h4>
                            <p className="text-gray-600 text-sm">Continuous learning opportunities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-[#7c533a]/5 to-[#eab308]/5 rounded-xl border border-[#7c533a]/10">
                      <div className="text-2xl font-bold text-[#7c533a] mb-1">150+</div>
                      <div className="text-xs text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#7c533a]/5 to-[#eab308]/5 rounded-xl border border-[#7c533a]/10">
                      <div className="text-2xl font-bold text-[#7c533a] mb-1">5,000+</div>
                      <div className="text-xs text-gray-600">Families Served</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#7c533a]/5 to-[#eab308]/5 rounded-xl border border-[#7c533a]/10">
                      <div className="text-2xl font-bold text-[#7c533a] mb-1">15+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Join Us */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-wider text-yellow-800 uppercase bg-gradient-to-r from-[#7c533a]/20 to-yellow-500/20 border border-[#7c533a]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Join Us
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold  leading-tight   text-[#7c533a] ">
                  Do your best work with a team that{' '}
                  <span className="bg-gradient-to-r from-[#7c533a] to-[#eab308] bg-clip-text text-transparent">
                    has your back
                  </span>
                </h2>

                <p className="text-xl text-gray-500 leading-relaxed">
                  Engineers, designers, and leaders—find the support you need to make a lasting impact.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold  text-yellow-900 mb-2 text-lg">Flexible / hybrid roles</h3>
                    <p className="text-gray-600">Work from home, office, or a combination that works best for you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2 text-lg">Effective onboarding in the first 90 days</h3>
                    <p className="text-gray-600">Structured integration process to help you succeed from day one.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2 text-lg">Mentorship & internal fellowships</h3>
                    <p className="text-gray-600">Guidance from experienced professionals and special project opportunities.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="bg-gradient-to-r from-[#7c533a] to-[#eab308] hover:from-[#6e4a31] hover:to-[#facc15] text-white px-6 py-3 text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  See Open Roles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#7c533a]/20 to-[#eab308]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Onboarding and team events at Akdam Group"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold  text-[#7c533a]">Team Events</h4>
                        <p className=" text-[#7c533a] text-sm">Building connections beyond work</p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      <span className="text-xs font-semibold text-yellow-800">Monthly</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional onboarding process"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#7c533a] to-[#eab308] rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#7c533a]">Onboarding Program</h4>
                        <p className=" text-yellow-600  text-sm">90-day structured integration</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#7c533a]/20 to-[#eab308]/20 backdrop-blur-sm px-3 py-1 rounded-full border border-[#7c533a]/30">
                      <span className="text-xs font-semibold text-yellow-800">Proven</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       
    </div>
  );
}