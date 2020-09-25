import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: 'loading...',
      tweets: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {

    // MAQUINA LOCAL: 'http://localhost:8888/api/gettweets'
    // SERVER HEROKU: 'https://linx-twitter-app.herokuapp.com/api/gettweets'
    await fetch('https://linx-twitter-app.herokuapp.com/api/gettweets')
      .then(res => res.json())
      .then(tweets => this.setState({
        loading: false,
        tweets: tweets,
        name: 'JavaScript'
      }))
  }


  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  async handleSubmit(event) {

    event.preventDefault();
    this.setState({
      loading: true,
      tweets: [],
      name: 'loading...'
    })
    document.querySelector('input[name="inputText"]').value = ''

    const hashtags = this.state.inputText

    // MAQUINA LOCAL: `http://localhost:8888/${hashtags}`
    // SERVER HEROKU: `https://linx-twitter-app.herokuapp.com/${hashtags}`
    await fetch(`https://linx-twitter-app.herokuapp.com/${hashtags}`)
      .then(res => res.json())
      .then(tweets => this.setState({
        loading: false,
        tweets: tweets,
        name: hashtags
      }))
  }



  render() {
    const hashtags = this.state.inputText

    return (
      <>
        <header>
          <h2 src="#">Linx #Twitter App</h2>
        </header>
        <div className="infoText">
          Pesquise por hashtags e encontre os resultados mais relevantes!
        </div>
        <form onSubmit={this.handleSubmit} action={hashtags} method="POST">
          <i>#</i>
          <input type="text" name="inputText" onChange={this.handleChange} autoFocus />
          <button type="submit">Search</button>
        </form>

        <div className="infoText">
          {`Mostrando resultados para: `}
          <span className="HASHTAGS">{'#' + this.state.name}</span>
        </div>

        <div>
          {this.state.loading ?
            <div className="loading-container">
              <span className="loading1"> . </span>
              <span className="loading2"> . </span>
              <span className="loading3"> . </span>
            </div> : null}
        </div>

        <div className="container">

          {this.state.tweets.map(tweet =>

            <div title="clique para abrir o tweet" className="tweet" key={tweet.id} onClick={() => window.open(`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`, '_blank')}>
              <div className="tweet-header">
                <img src={tweet.user.profile_image_url} alt='user-img'></img>
                <h3> {`@${tweet.user.screen_name}`} </h3>
              </div>

              <p id="TEXTO-tweet">
                {
                  tweet.text
                    .split('#' + this.state.name)
                    .map((text, index) =>
                      (<span key={index}>
                        {text}

                        <span className="HASHTAGS">
                          {' #' + this.state.name}
                        </span>

                      </span>)
                    )
                }
              </p>


              <h4> {tweet.created_at.substring(0, 11)} </h4>
            </div>

          )}
        </div>


      </>
    )
  }


}

export default App;