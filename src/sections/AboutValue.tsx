export default function AboutValue() {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight  text-green-700  bg-clip-text">Our values</h2>
          <p className="text-lg  section-description text-left max-w-3xl">
          We believe that great organizations are built on strong principles.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* Value 1 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Be world-class</h3>
              <p className="text-black font-body">
              We strive for excellence in every aspect of our work. Our goal is to set a high standard, constantly pushing boundaries to achieve the best results.
              </p>
            </div>
  
            {/* Value 2 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Share everything you know</h3>
              <p className="text-black font-body">
              Knowledge grows when shared. We foster a culture of openness where ideas flow freely, empowering everyone to learn and grow together.
              </p>
            </div>
  
            {/* Value 3 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Always learning</h3>
              <p className="text-black font-body">
              Growth never stops. We embrace curiosity and continuous improvement, staying adaptable in a world that’s always changing.
              </p>
            </div>
  
            {/* Value 4 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Be supportive</h3>
              <p className="text-black font-body">
              We rise by lifting others. Supporting our team, clients, and community is at the heart of who we are. Collaboration and empathy fuel our success.
              </p>
            </div>
  
            {/* Value 5 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Take responsibility</h3>
              <p className="text-black font-body">
              Accountability is key. We own our actions, celebrate our successes, and learn from our mistakes. Responsibility drives us to deliver our best.
              </p>
            </div>
  
            {/* Value 6 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700">Enjoy downtime</h3>
              <p className="text-black font-body">
              Balance matters. We believe that rest fuels creativity and productivity. Taking time to recharge helps us bring our best selves to work.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }