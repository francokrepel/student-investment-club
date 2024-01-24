import Header from '../components/Header';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image'

const executiveBoardMembers = [
  {
    name: 'Jagger Liguori',
    position: 'President',
    email: 'jagger.liguori@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/jagger-liguori/',
    image: '/jagger.jpg',
  },
  {
    name: 'Abby Perini',
    position: 'Vice President',
    email: 'lperini@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/lauren-abby-perini/',
    image: '/abby.png',
  },
  {
    name: 'Devin Mohr',
    position: 'Treasurer',
    email: 'd.mohr@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/devinmohr/',
    image: '/devin.png',
  },
  {
    name: 'Kameron Lubben',
    position: 'Secretary',
    email: 'klubben@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/kameronlubben/',
    image: '/kameron.jpeg',
  },
  {
    name: 'Gaby Dos Santos',
    position: 'Historian',
    // Assuming the email, linkedin, and image details are not available for Gaby Dos Santos
    email: '',
    linkedin: 'https://www.linkedin.com/in/gabrieladossantos319/',
    image: '/gabriela.jpeg',
  },
  {
    name: 'Aaron Goffstein',
    position: 'Current Events',
    email: 'aarongoffstein@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/aaron-goffstein-/',
    image: '/aaron.jpeg',
  },
  {
    name: 'Franco Krepel',
    position: 'Web Manager',
    email: 'francokrepel@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/franco-krepel-a241b21b7/',
    image: '/franco_krepel.jpeg',
  },
  {
    name: 'Yasmin Karazoun',
    position: 'Social Media Director',
    // Assuming the email, linkedin, and image details are not available for Yasmin Karazoun
    email: '',
    linkedin: '',
    image: '/yasmin.png',
  },
  {
    name: 'Moksha Saripilli',
    position: 'Social Media Director',
    // Assuming the email, linkedin, and image details are not available for Moksha Saripilli
    email: '',
    linkedin: 'https://www.linkedin.com/in/moksha-saripilli-32250a256/',
    image: '/moksha.jpeg',
  },
  {
    name: 'Jonathan Tibi',
    position: 'Recruiting Committee Head',
    email: 'jonathan.tibi@warrington.ufl.edu',
    linkedin: 'https://www.linkedin.com/in/jonathan-tibi/',
    image: '/jonathon_tibi.png',
  },
  {
    name: 'Luke Riahifar',
    position: 'Recruiting Committee',
    // Assuming the email, linkedin, and image details are not available for Luke Riahifar
    email: '',
    linkedin: 'https://www.linkedin.com/in/luke-riahifar-7841b0250/',
    image: '/luke.jpeg',
  },
  {
    name: 'Brijesh Patel',
    position: 'Recruiting Committee',
    // Assuming the email, linkedin, and image details are not available for Brijesh Patel
    email: '',
    linkedin: 'https://www.linkedin.com/in/brijeshcpatel/',
    image: '/brijesh.jpeg',
  },
  {
    name: 'Josiah Park',
    position: 'Recruiting Committee',
    // Assuming the email, linkedin, and image details are not available for Josiah Park
    email: '',
    linkedin: 'https://www.linkedin.com/in/josiahpark/',
    image: '/josiah.jpeg',
  },
  {
    name: 'Michael Rooth',
    position: 'Programming Committee Head',
    email: 'michaelrooth@ufl.edu',
    linkedin: 'https://www.linkedin.com/in/michael-rooth-a8505a214/',
    image: '/m_rooth.jpg',
  },
  {
    name: 'Gracie Ding',
    position: 'Programming Committee',
    // Assuming the email, linkedin, and image details are not available for Gracie Ding
    email: '',
    linkedin: '',
    image: '/gracie.png',
  },
  {
    name: 'Fernando Santiago Balsalobre',
    position: 'Programming Committee',
    // Assuming the email, linkedin, and image details are not available for Fernando Santiago Balsalobre
    email: '',
    linkedin: 'https://www.linkedin.com/in/fernando-santiago-balsalobre-877a87253/',
    image: '/fernando.jpeg',
  },
  {
    name: 'Jenny Lin',
    position: 'Programming Committee',
    // Assuming the email, linkedin, and image details are not available for Jenny Lin
    email: '',
    linkedin: 'https://www.linkedin.com/in/jenny-lin28/',
    image: '/jenny.jpeg',
  },
  {
    name: 'Matthew Sielaff',
    position: 'Programming Committee',
    // Assuming the email, linkedin, and image details are not available for Matthew Sielaff
    email: '',
    linkedin: 'https://www.linkedin.com/in/matthew-sielaff/',
    image: '/matthew.jpeg',
  }
];

  
const ExecutiveBoard = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section className="container mx-auto mt-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Executive Board</h1>
        <p className="text-lg text-center">Meet our executive board. </p>
        <p className="text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Currently undergoing change for this semester. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {executiveBoardMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 p-6 rounded-lg">
              <Image
                src={member.image!}
                alt={`${member.name}'s profile picture`}
                width={100}
                height={100}
                className="w-36 h-36 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">{member.position}</p>
              <p className="text-lg mb-2">{member.email}</p>
              <div className="mx-auto flex items-center">
                <a href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer">
                <AiFillLinkedin className="text-5xl hover:text-blue-400"/>
                </a>
              </div>
            </div>
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBoard;
