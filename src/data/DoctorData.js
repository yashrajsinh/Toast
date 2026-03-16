const randomImg = gender =>
  //genrates random images
  `https://randomuser.me/api/portraits/${gender}/${Math.floor(
    Math.random() * 90,
  )}.jpg`;

const doctors = [
  {
    name: 'Dr. John Smith',
    type: 'Cardiologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Emily Johnson',
    type: 'Dermatologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Michael Williams',
    type: 'Neurologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Sarah Brown',
    type: 'Pediatrician',
    image: randomImg('women'),
  },
  {
    name: 'Dr. David Jones',
    type: 'Orthopedic Surgeon',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Jennifer Garcia',
    type: 'Psychiatrist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Robert Miller',
    type: 'General Physician',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Linda Davis',
    type: 'Gynecologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. James Rodriguez',
    type: 'Endocrinologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Patricia Martinez',
    type: 'Oncologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Christopher Hernandez',
    type: 'Urologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Barbara Lopez',
    type: 'Pulmonologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Daniel Gonzalez',
    type: 'Gastroenterologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Elizabeth Wilson',
    type: 'Rheumatologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Matthew Anderson',
    type: 'Nephrologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Susan Thomas',
    type: 'Allergist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Anthony Taylor',
    type: 'Radiologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Karen Moore',
    type: 'Ophthalmologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Mark Jackson',
    type: 'ENT Specialist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Nancy Martin',
    type: 'Plastic Surgeon',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Steven Lee',
    type: 'Emergency Medicine',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Betty Perez',
    type: 'Family Medicine',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Paul Thompson',
    type: 'Hematologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Sandra White',
    type: 'Immunologist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Kevin Harris',
    type: 'Sports Medicine',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Donna Clark',
    type: 'Geriatrician',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Brian Lewis',
    type: 'Pathologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Carol Walker',
    type: 'Infectious Disease Specialist',
    image: randomImg('women'),
  },
  {
    name: 'Dr. Jason Hall',
    type: 'Anesthesiologist',
    image: randomImg('men'),
  },
  {
    name: 'Dr. Michelle Allen',
    type: 'Internal Medicine',
    image: randomImg('women'),
  },
];

export default doctors;
