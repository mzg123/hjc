var React=require("react");
require("./input.scss");
var Input=React.createClass({
    blur:function(evt){

        this.props.tip=evt.target.value;
        this.props.option.inputBlur({type:"onblur",data:{name:this.props.option.field.name,tip:"1111111111111"}})
    },
    render:function(){
        var type="text";//this.props.option.type;

        return (
            <div className="input">
               <label  >{this.props.option.field.name}:</label> <input type={type} onBlur={this.blur.bind(this)}/>
                 <div className="tip">111{this.props.option.field.tip}</div>
            </div>

        )
    }

})

module.exports=Input;