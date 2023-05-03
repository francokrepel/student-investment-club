import Header from '../components/Header';
import  AiFillLinkedin from 'react-icons/ai';
import Image from 'next/image'

const executiveBoardMembers = [
    {
      // PRESIDENT
      name: 'Jagger Liguori',
      position: 'President',
      email: 'jagger.liguori@ufl.edu',
      linkedin: '<Jagger_Liguori_LinkedIn_URL>',
      image: '/jagger.jpg',
    },
    {
      // TREASURER
      name: 'Adam Weinberg',
      position: 'Treasurer',
      email: 'adamweinberg@ufl.edu',
      linkedin: '<Adam_Weinberg_LinkedIn_URL>',
      image: '/adam.jpeg',
    },
    {
      // VICE PRESIDENT
      name: 'Olivia Giraldo',
      position: 'Vice President',
      email: 'oliviagiraldo@ufl.edu',
      linkedin: '<Olivia_Giraldo_LinkedIn_URL>',
      image: '/olivia.jpg',
    },
    {
      // SECRETARY
      name: 'Jordon Neal',
      position: 'Secretary',
      email: 'jordon.neal@ufl.edu',
      linkedin: '<Jordon_Neal_LinkedIn_URL>',
      image: '/jordon.jpeg',
    },
    {
      // RECRUITMENT
      name: 'Jonathon Goldberg',
      position: 'Recruitment Co-Director',
      email: 'jonathangoldberg@ufl.edu',
      linkedin: '<Jonathon_Goldberg_LinkedIn_URL>',
      image: '/jon.jpg',
    },
    {
      name: 'Jonathon Tibi',
      position: 'Recruitment Co-Director',
      email: 'jonathan.tibi@warrington.ufl.edu',
      linkedin: '<Jonathon_Tibi_LinkedIn_URL>',
      image: '/jonathon_tibi.png',
    },
    {
      // HISTORIAN
      name: 'Lauren "Abby" Perini',
      position: 'Historian',
      email: 'lperini@ufl.edu',
      linkedin: '<Lauren_Perini_LinkedIn_URL>',
      image: '/abby.jpg',
    },
    // PROGRAMMING
    {
      name: 'Michael Rooth',
      position: 'Programming Co-Director',
      email: 'michaelrooth@ufl.edu',
      linkedin: '<Michael_Rooth_LinkedIn_URL>',
      image: '/m_rooth.jpg',
    },
    {
      name: 'Kameron Lubben',
      position: 'Programming Co-Director',
      email: 'klubben@ufl.edu',
      linkedin: '<Kameron_Lubben_LinkedIn_URL>',
      image: '/kameron.jpeg',
    },
    {
      name: 'Devin Mohr',
      position: 'Programming Co-Director',
      email: 'd.mohr@ufl.edu',
      image: '/devin.png',
    },
    // CURRENT EVENTS
    {
      name: 'Aaron Goffstein',
      position: 'Current Events',
      email: 'aarongoffstein@ufl.edu',
      linkedin: '<Aaron_Goffstein_LinkedIn_URL>',
      image: '/aaron.jpeg',
    },
    // WEBSITE
    {
      name: 'Franco Krepel',
      position: 'Website Developer',
      email: 'francokrepel@ufl.edu',
      linkedin: '<Franco_Krepel_LinkedIn_URL>',
      image: '/franco_krepel.jpeg',
    }
]
  
const ExecutiveBoard = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section className="container mx-auto mt-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-6 text-center">Executive Board</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-20 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {executiveBoardMembers.map((member) => (
           console.log(member.image),
            <div key={member.name} className="bg-gray-800 p-6 rounded-lg">
              <Image
                src={member.image!}
                alt={`${member.name}'s profile picture`}
                width={100}
                height={100}
                className="w-36 h-36 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg mb-2">{member.position}</p>
              <p className="text-lg mb-2">{member.email}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                {/* <div className="w-6 h-6">
                    <AiFillLinkedin />
                </div> */}
              </a>
            </div>
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBoard;
