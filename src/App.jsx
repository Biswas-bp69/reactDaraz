import Header from './header'
import ItemCard from './itemCard'

function App() {


  return (
    <>

      <Header></Header>
      <main className="container">



        <section className="row mt-5">
          <h3>Flash Sale</h3>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
          <div className="col-lg-3 p-3">
            <ItemCard></ItemCard>
          </div>
        </section>




      </main>








    </>
  )
}

export default App
