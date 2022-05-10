import Card from './Card'
import '../css/Home.css'
import Banner from './Banner'

const Home = () => {
  return (
    <div className="home">
        <Banner/>

          <div  className='home__section'>
            <Card 
             src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2018/05/the-sentinel.jpg?w=1480&ssl=1"
             title="Online spooks"
             description="Unique activities we can do together, led by a world of hosts."/>
            <Card 
            src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/10/The-Orphanage-1.jpg?w=1400&ssl=1"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
            />
            <Card 
            src="https://frightfind.com/wp-content/uploads/2016/01/roycroft-inn-haunted-hotel.jpg"
            title="Entire homes"
            description="Comfortable private spooky places, with room for friends or family."
            />
          </div>
          <div className='home__section'>
            <Card
                src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_507/MTc5NDg0OTE0ODQ3MTk2NDkz/ghosts-of-the-past-the-haunted-apartment.webp"
                title="3 Bedroom Haunted Flat in Laval"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src="https://frightfind.com/wp-content/uploads/2016/01/maplewood-hotel-haunted-hotel.jpg"
                title="Haunted house in Montreal"
                description="Enjoy the creepy sights of Montreal with this haunted house"
                price="$350/night"
            />
            <Card
                src="https://frightfind.com/wp-content/uploads/2016/02/eagle-hotel-haunted-hotel.jpg"
                title="Eagle Mansion"
                description="Spooky big house just for you."
                price="$150/night"
            />
            </div>
        </div>
  )
}

export default Home