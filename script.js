var Show = React.createClass({

  componentDidMount: function(){
    store.set("total", 0)
  },

  getInitialState: function(){

    var data = [
      {"category": "Talent", "data": [
        {"name":"Jim Parsons ", "price":100, "category": "talent", "on": false },
        {"name":"Kaley Cuoco ", "price":100, "category": "talent", "on": false },
        {"name":"Johnny Galecki ", "price":100, "category": "talent", "on": false },
        {"name":"Lauren Graham ", "price":75, "category": "talent", "on": false },
        {"name":"Alexis Bledel ", "price":75, "category": "talent", "on": false },
        {"name":"Mark Harmon ", "price":52.5, "category": "talent", "on": false },
        {"name":"Kevin Spacey ", "price":50, "category": "talent", "on": false },
        {"name":"Peter Dinklage ", "price":50, "category": "talent", "on": false },
        {"name":"Lena Headey ", "price":50, "category": "talent", "on": false },
        {"name":"Kit Harington ", "price":50, "category": "talent", "on": false },
        {"name":"Emilia Clarke ", "price":50, "category": "talent", "on": false },
        {"name":"Nikolaj Coster-Waldau ", "price":50, "category": "talent", "on": false },
        {"name":"Claire Danes ", "price":45, "category": "talent", "on": false },
        {"name":"Mariska Hargitay ", "price":45, "category": "talent", "on": false },
        {"name":"Dwayne Johnson ", "price":40, "category": "talent", "on": false },
        {"name":"Ellen Pompeo ", "price":40, "category": "talent", "on": false },
        {"name":"Joel Kinnaman ", "price":35, "category": "talent", "on": false },
        {"name":"Drew Barrymore ", "price":35, "category": "talent", "on": false },
        {"name":"Emma Stone ", "price":35, "category": "talent", "on": false },
        {"name":"Jonah Hill ", "price":35, "category": "talent", "on": false },
        {"name":"Reese Witherspoon ", "price":35, "category": "talent", "on": false },
        {"name":"Nicole Kidman ", "price":35, "category": "talent", "on": false },
        {"name":"Nancy Cartwright (Bart Simpson)", "price":31.5, "category": "talent", "on": false },
        {"name":"Dan Castellaneta (Homer Simpson)", "price":31.5, "category": "talent", "on": false },
        {"name":"Julie Kavner (Marge Simpson)", "price":31.5, "category": "talent", "on": false },
        {"name":"Yeardley Smith (Lisa Simpson)", "price":31.5, "category": "talent", "on": false },
        {"name":"Kiefer Sutherland ", "price":30, "category": "talent", "on": false },
        {"name":"Michael Weatherly ", "price":30, "category": "talent", "on": false },
        {"name":"Jeffrey Tambor ", "price":27.5, "category": "talent", "on": false },
        {"name":"Naomi Watts ", "price":27.5, "category": "talent", "on": false },
        {"name":"Sarah Jessica Parker ", "price":27.5, "category": "talent", "on": false },
        {"name":"Hugh Laurie ", "price":27.5, "category": "talent", "on": false },
        {"name":"Julia Louis-Dreyfus ", "price":25, "category": "talent", "on": false },
        {"name":"Tim Allen ", "price":25, "category": "talent", "on": false },
        {"name":"Patricia Heaton ", "price":25, "category": "talent", "on": false },
        {"name":"Julie Bowen ", "price":25, "category": "talent", "on": false },
        {"name":"Ty Burrell ", "price":25, "category": "talent", "on": false },
        {"name":"Jesse Tyler Ferguson ", "price":25, "category": "talent", "on": false },
        {"name":"Eric Stonestreet ", "price":25, "category": "talent", "on": false },
        {"name":"Sofia Vergara ", "price":25, "category": "talent", "on": false },
        {"name":"Daniel Craig ", "price":25, "category": "talent", "on": false },
        {"name":"Clive Owen ", "price":25, "category": "talent", "on": false },
        {"name":"Viola Davis ", "price":25, "category": "talent", "on": false },
        {"name":"James Spader ", "price":25, "category": "talent", "on": false },
        {"name":"Billy Bob Thornton ", "price":25, "category": "talent", "on": false },
        {"name":"Kerry Washington ", "price":25, "category": "talent", "on": false },
        {"name":"Ted Danson ", "price":22.5, "category": "talent", "on": false },
        {"name":"Aaron Paul ", "price":22.5, "category": "talent", "on": false },
        {"name":"Kevin James ", "price":20, "category": "talent", "on": false },
        {"name":"Matt LeBlanc ", "price":20, "category": "talent", "on": false },
        {"name":"Tom Selleck ", "price":20, "category": "talent", "on": false },
        {"name":"Angie Harmon ", "price":18.5, "category": "talent", "on": false },
        {"name":"Wentworth Miller ", "price":17.5, "category": "talent", "on": false },
        {"name":"Dominic Purcell ", "price":17.5, "category": "talent", "on": false },
        {"name":"Sarah Wayne Callies ", "price":17.5, "category": "talent", "on": false },
        {"name":"Michelle Monaghan ", "price":17.5, "category": "talent", "on": false },
        {"name":"Evan Rachel Wood ", "price":17.5, "category": "talent", "on": false },
        {"name":"Thandie Newton ", "price":17.5, "category": "talent", "on": false },
        {"name":"Jeffrey Wright ", "price":17.5, "category": "talent", "on": false },
        {"name":"James Marsden ", "price":17.5, "category": "talent", "on": false },
        {"name":"Ingrid Bolso Berdal ", "price":17.5, "category": "talent", "on": false },
        {"name":"Luke Hemsworth ", "price":17.5, "category": "talent", "on": false },
        {"name":"Sidse Babett Knudsen ", "price":17.5, "category": "talent", "on": false },
        {"name":"Simon Quarterman ", "price":17.5, "category": "talent", "on": false },
        {"name":"Rodrigo Santoro ", "price":17.5, "category": "talent", "on": false },
        {"name":"Angela Sarafyan ", "price":17.5, "category": "talent", "on": false },
        {"name":"Shannon Woodward ", "price":17.5, "category": "talent", "on": false },
        {"name":"Ed Harris ", "price":17.5, "category": "talent", "on": false },
        {"name":"Anthony Hopkins ", "price":17.5, "category": "talent", "on": false },
        {"name":"Taraji P. Henson ", "price":17.5, "category": "talent", "on": false },
        {"name":"Terrence Howard ", "price":17.5, "category": "talent", "on": false },
        {"name":"Keri Russell ", "price":17.5, "category": "talent", "on": false },
        {"name":"Jensen Ackles ", "price":17.5, "category": "talent", "on": false },
        {"name":"Rob Lowe ", "price":17.5, "category": "talent", "on": false },
        {"name":"Mandy Patinkin ", "price":15, "category": "talent", "on": false },
        {"name":"Mindy Kaling ", "price":14, "category": "talent", "on": false },
        {"name":"Zooey Deschanel ", "price":13, "category": "talent", "on": false },
        {"name":"Scott Bakula ", "price":13, "category": "talent", "on": false },
        {"name":"Téa Leoni ", "price":13, "category": "talent", "on": false },
        {"name":"Kristen Bell ", "price":12.5, "category": "talent", "on": false },
        {"name":"America Ferrera ", "price":12.5, "category": "talent", "on": false },
        {"name":"Jennifer Jason Leigh ", "price":12.5, "category": "talent", "on": false },
        {"name":"Amy Landecker ", "price":10, "category": "talent", "on": false },
        {"name":"Jay Duplass ", "price":10, "category": "talent", "on": false },
        {"name":"Gaby Hoffmann ", "price":10, "category": "talent", "on": false },
        {"name":"Judith Light ", "price":10, "category": "talent", "on": false },
        {"name":"Anthony Anderson ", "price":10, "category": "talent", "on": false },
        {"name":"Andre Braugher ", "price":10, "category": "talent", "on": false },
        {"name":"Geena Davis ", "price":10, "category": "talent", "on": false },
        {"name":"Kyle Chandler ", "price":10, "category": "talent", "on": false },
        {"name":"Sam Heughan ", "price":10, "category": "talent", "on": false },
        {"name":"Caitriona Balfe ", "price":10, "category": "talent", "on": false },
        {"name":"Michael Sheen ", "price":10, "category": "talent", "on": false },
        {"name":"Lizzy Caplan ", "price":10, "category": "talent", "on": false },
        {"name":"Jeff Garlin ", "price":9, "category": "talent", "on": false },
        {"name":"Tracee Ellis Ross ", "price":8, "category": "talent", "on": false },
        {"name":"Abigail Spencer ", "price":7.5, "category": "talent", "on": false },
        {"name":"Gina Rodriguez ", "price":6, "category": "talent", "on": false },
        {"name":"Bryshere Y. Gray ", "price":2, "category": "talent", "on": false },
        {"name":"Jussie Smollett ", "price":2, "category": "talent", "on": false },
        {"name":"Trai Byers ", "price":2, "category": "talent", "on": false }
      ]},

      {"category": "Time Period", "data": [
        {"name":"Future ", "price":100,"category":"Time Period","on": false},
        {"name":"Near (less than 25)", "price":50,"category":"Time Period","on": false},
        {"name":"Present day ", "price":5,"category":"Time Period","on": false},
        {"name":"1990s ", "price":15,"category":"Time Period","on": false},
        {"name":"1980s ", "price":20,"category":"Time Period","on": false},
        {"name":"1970s ", "price":30,"category":"Time Period","on": false},
        {"name":"1960s ", "price":40,"category":"Time Period","on": false},
        {"name":"1900s–1950s ", "price":50,"category":"Time Period","on": false},
        {"name":"1800s ", "price":55,"category":"Time Period","on": false},
        {"name":"1700s ", "price":65,"category":"Time Period","on": false},
        {"name":"0–1699 ", "price":75,"category":"Time Period","on": false},
        {"name":"Human history BCE ", "price":85,"category":"Time Period","on": false},
        {"name":"Ice Age ", "price":90,"category":"Time Period","on": false},
        {"name":"Prehistoric ", "price":95,"category":"Time Period","on": false},
      ]},
      {"category": "Setting", "data":[
        {"name":"New York ", "price":65,"category":"Setting","on": false},
        {"name":"Los Angeles ", "price":55,"category":"Setting","on": false},
        {"name":"Chicago ", "price":45,"category":"Setting","on": false},
        {"name":"Other North American city ", "price":25,"category":"Setting","on": false},
        {"name":"North American noncity location ", "price":35,"category":"Setting","on": false},
        {"name":"Africa/Australia/Asia/Europe/South America ", "price":60,"category":"Setting","on": false},
        {"name":"Island ", "price":70,"category":"Setting","on": false},
        {"name":"The sea (above water)", "price":75,"category":"Setting","on": false},
        {"name":"The sea (underwater)", "price":100,"category":"Setting","on": false},
        {"name":"Outer space ", "price":100,"category":"Setting","on": false},
        {"name":"Inner earth ", "price":65,"category":"Setting","on": false},
        {"name":"Afterlife ", "price":40,"category":"Setting","on": false},
        {"name":"Castle ", "price":35,"category":"Setting","on": false},
        {"name":"Bar or restaurant ", "price":50,"category":"Setting","on": false},
        {"name":"Prison ", "price":45,"category":"Setting","on": false},
        {"name":"Hospital ", "price":35,"category":"Setting","on": false},
        {"name":"Office ", "price":30,"category":"Setting","on": false},
        {"name":"School ", "price":25,"category":"Setting","on": false},
        {"name":"Empty room ", "price":10,"category":"Setting","on": false},
        {"name":"Add “apocalyptic” to any setting ", "price":70,"category":"Setting","on": false},
      ]},
      {"category": "Special Effects", "data":[
        {"name":"Dinosaurs ", "price":100,"category":"Special Effects","on": false},
        {"name":"Aliens ", "price":75,"category":"Special Effects","on": false},
        {"name":"Fast zombies ", "price":65,"category":"Special Effects","on": false},
        {"name":"Slow zombies ", "price":60,"category":"Special Effects","on": false},
        {"name":"Robots ", "price":55,"category":"Special Effects","on": false},
        {"name":"Ghosts ", "price":45,"category":"Special Effects","on": false},
        {"name":"Vampires ", "price":35,"category":"Special Effects","on": false},
        {"name":"Other monsters ", "price":25,"category":"Special Effects","on": false},
        {"name":"Fictional animals (e.g. dragons)", "price":50,"category":"Special Effects","on": false},
        {"name":"Nonfictional wild animals ", "price":40,"category":"Special Effects","on": false},
        {"name":"Nonfictional domestic animals ", "price":30,"category":"Special Effects","on": false},
        {"name":"Large-scale battle scenes ", "price":75,"category":"Special Effects","on": false},
        {"name":"Flying ", "price":25,"category":"Special Effects","on": false},
      ]},
      {"category": "Pre-existing Intellectual Property", "data": [
        {"name":"Marvel ", "price":100,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Star Wars universe ", "price":100,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Batman ", "price":95,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Other DC ", "price":55,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Harry Potter universe ", "price":75,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Star Trek universe ", "price":55,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Game of Thrones universe ", "price":65,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Pixar ", "price":70,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Non-Pixar animated universe ", "price":50,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Sherlock Holmes (automatically disqualified)", "price":0,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Other movie IP ", "price":50,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Other TV IP ", "price":50,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"Other book/comic IP ", "price":50,"category":"Pre-existing Intellectual Property","on": false},
        {"name":"IP miscellany ", "price":50,"category":"Pre-existing Intellectual Property","on": false},
      ]},
      {"category": "Misc", "data": [
        {"name":"Off-the-board actor (e.g., Denzel Washington, Meryl Streep, etc.) ", "price":150,"category":"Misc","on": false},
        {"name":"Name director ", "price":80,"category":"Misc","on": false},
        {"name":"Name director (pilot-only)", "price":5,"category":"Misc","on": false},
        {"name":"Name writer ", "price":60,"category":"Misc","on": false},
        {"name":"Live musical performances ", "price":20,"category":"Misc","on": false},
        {"name":"Professional sports league licensing ", "price":30,"category":"Misc","on": false},
        {"name":"Soundtrack/music licensing (75 million units sold club) ", "price":75,"category":"Misc","on": false},
        {"name":"Soundtrack/music licensing (other)", "price":35,"category":"Misc","on": false},
        {"name":"Based on a true story ", "price":19,"category":"Misc","on": false},
        {"name":"Title with pun in it ($7 per pun)", "price":7,"category":"Misc","on": false},
        {"name":"Star plays themselves ", "price":14,"category":"Misc","on": false},
        {"name":"Stand-up comedy cold open ", "price":3,"category":"Misc","on": false},
        {"name":"Is your show about the mob? You’re paying protection ", "price":25,"category":"Misc","on": false},
        {"name":"No one in cast will ever ask to direct episodes ", "price":4,"category":"Misc","on": false},
        {"name":"“Gritty” ", "price":12,"category":"Misc","on": false},
        {"name":"Character receives the newspaper a day early ", "price":6,"category":"Misc","on": false},
      ]}
    ]

    // mock version!
    // var data = [
    //   {"category": "Misc", "data": [
    //     {"name":"Off-the-board actor (e.g., Denzel Washington, Meryl Streep, etc.) ", "price":150,"category":"Misc","on": false},
    //   ]}
    // ]

    return({
      "data": data,
      "total": 0
    })

  }, // getInitialState

  clear: function(){
    // clear out everything in the store
    var data = this.state.data
    for (var i=0; i< data.length; i++){
      var catData = data[i].data;
      for (var j=0; j<catData.length; j++){
        var item = catData[j];
        item.on = false
      }
    }

    this.setState({
      "data": data,
      "total": 0
    })
  },

  setTotal: function(value){
    // change the value of total here!
    // value(int): value to add to current total (use negative number tos subtract)

    var total = this.state.total;
    total += value
    this.setState({
      "total": total
    })
  },

  setChecked: function(catId, itemId, state){
    // itemId: id of item.
    // catId: id of category
    // state: state checkbox should be set to

    var data = this.state.data;
    data[catId].data[itemId].on = state
    this.setState({
      "data": data
    })
  },

  eachCategory: function(category, i){
    return(
      <Category
        key={i}
        id={i}
        data={category.data}
        name={category.category}
        callBackShow={this.setTotal}
        callBackCheck={this.setChecked}
      >
      </Category>
    )
  },

  eachItemSummary: function(item, i){
    if (item.on){
      return(
        <li key={i}>{item.name}</li>
      )
    }
  },

  eachCategorySummary: function(category, i){
    // prints each choice in a category

    // are any items in this category select?
    var selectedItems = category.data.filter(function(item, i){
      return item.on
    })

    if (selectedItems.length > 0){
      return (
        <div
          key={i}
        >
          <h3>{category.category}</h3>
          <ul>
          {category.data.map(this.eachItemSummary)}
          </ul>
        </div>
      )
    }

  },

  render: function(){

    console.log("render show")
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="well">
            {this.state.data.map(this.eachCategory)}
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="well fixed">
              <h3>Total Price</h3>
              <h3 id="total" className={this.state.total <= 250 ? "" : "overBudget"}>{this.state.total} </h3>
              <button
                className="btn btn-lg btn-danger"
                onClick={this.clear}
                > Clear All
              </button>
              <div>{this.state.data.map(this.eachCategorySummary)}</div>
            </div>
          </div>

        </div>

      </div>
    )
  }
})

var Category = React.createClass({

  getInitialState: function(){
    return({"open": false})
  },

  openPanel: function(){
    var isOpen = this.state.open
    this.setState({"open": !isOpen})
  },

  eachItem: function(item, i){

    console.log("item.on="+item.on)
    return(
      <Item
        index={i}
        key={i}
        categoryId={this.props.id}
        id={i}
        data={item}
        callBackShow={this.props.callBackShow}
        callBackCheck={this.props.callBackCheck}
        checked={item.on}
      >
      </Item>
    )
  },

  render: function(){
    // example structure:
    // {"cateogry": "Misc", "data": [
    //   {"name":"Off-the-board actor (e.g., Denzel Washington, Meryl Streep, etc.) ", "price":150,"category":"Misc","on": false},
    //   {"name":"Name director ", "price":80,"category":"Misc","on": false},
    //   .
    //   .
    //   .
    // ]}
    return (
      <div className="accordion-wrapper">
        <div
          className="accordion"
          onClick={this.openPanel}>
          <h3>{this.props.name}</h3>
        </div>
        <div
          className={"panel" + (this.state.open ? "show" : "")}>
          {this.props.data.map(this.eachItem)}
        </div>
      </div>
    )
  }
})

var Item = React.createClass({

  handleClick: function(){

    //update state of check box
    var curChecked = this.props.checked

    var price = this.props.data.price
    if (curChecked) {
      // on -> off
      this.props.callBackShow(-1 * price)
    } else {
      // off -> on
      this.props.callBackShow(price)
    }
    this.props.callBackCheck(this.props.categoryId, this.props.id, !curChecked)

  },

  render: function(){

    console.log(this.props.on)
    return (
      <div className="item">
        <label>{this.props.data.name}</label>
        	<input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleClick}
          >
          </input>
      </div>
    )
  }

})

React.render(<Show/>,
    document.getElementById('outer-container'));
