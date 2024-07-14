import about_us from '../../assets/about_us_bg.jpg';
import { Button } from '../ui/button';
import { Card, CardContent } from "../ui/card";

interface Vision {
  heading: string;
  content: string;
  image: string;
}

const visions: Vision[] = [
  {
    heading: "Mission Statement",
    content: "To innovate, inspire, and impact the world positively.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJA60r489vGpDKYhbeHjigG_a-pu1e7020A&s"
  },
  {
    heading: "Values",
    content: "We believe in fostering a culture Of integrity, pushing boundaries through innovation, and promoting collaboration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJA60r489vGpDKYhbeHjigG_a-pu1e7020A&s"
  }
];


const Vision = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className=" absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm"
            style={{ backgroundImage: `url(${about_us})` }}
          >
        </div>

        <div className="relative z-10 mx-6 lg:mx-0">
           <div className="p-4 bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 ">
            <Button className='absolute right-5' variant='outline'>Learn More</Button>
            <h2 className="text-4xl font-semibold text-center mb-5 mt-4">Our Vision</h2>
            <div className="text-gray-800 space-y-3">
              {visions.map(({heading, content, image}) => {
                return (
                  <Card>
                    <CardContent className='flex gap-5 items-center'>
                      <div>
                        <img src={image} width={100} />
                      </div>
                      <div className='text-left'>
                        <h3 className='text-2xl font-bold'>{heading}</h3>
                        <p>{content}</p>
                      </div>
                    </CardContent>                    
                  </Card>
                )
              })}
            </div>
        </div>
      </div>
   </div>
    )
}

export default Vision