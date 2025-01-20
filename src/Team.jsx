const Team = () => (
    <section className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold text-center">Meet Our Team</h2>
      <p className="text-center mt-4 text-gray-700">
        This is the team of creative professionals who are passionate about their work and always ready to collaborate with you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            name: "Abinash Rout",
            role: "CEO",
            description: "Visionary filmmaker, CEO of Zoomster Hub, and founder of Zoomaax Studio, redefining industries."
          },
          {
            name: "Nensi Gadhiya",
            role: "Creative Head",
            description: "Creative Head at Zoomster Hub, leading innovative projects in E-commerce, Media, and Design."
          },
          {
            name: "Priya Sharma",
            role: "Management Head",
            description: "Management Head at Zoomster Hub, driving growth, efficiency, and innovation across teams."
          },
          {
            name: "Puja Patra",
            role: "Event & Media PRO",
            description: "Event and Media PRO at Zoomster Hub, excelling in event management, media relations, and strategy."
          },
          {
            name: "Natthala Sandhya",
            role: "Talent & Media PRO",
            description: "Talent and Media PRO at Zoomster Hub, specializing in talent management, media relations, and coordination."
          }
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 shadow rounded hover:shadow-lg">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600 font-semibold">{member.role}</p>
            <p className="mt-2 text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold">Connect with us to Grow!</p>
        <p className="mt-2 text-gray-700">
          Delivering excellence through Web & App Development, innovative Media PR, engaging OTT streaming, seamless Event & Celebrity Management, and Pro Max—a platform creating opportunities and driving success for businesses and individuals globally.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          <a href="#" className="text-pink-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
  
  export default Team;
  