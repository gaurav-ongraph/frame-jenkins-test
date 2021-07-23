// emitted from framec_v0.4.1
// get include files at https://github.com/frame-lang/frame-ancillary-files


const FrameEvent = function(message, parameters) {
    const that = {};
    that._message = message;
    that._parameters = parameters;
    that._return = null;
    return that;
};


let ChangingState = function () {
    
    let that = {};
    that.constructor = ChangingState;
    
    //===================== Interface Block ===================//
    
    that.transition_do = function () {
        let e = FrameEvent("transition_do",null);
        _state_(e);
    }
    
    that.changeState_do = function () {
        let e = FrameEvent("changeState_do",null);
        _state_(e);
    }
    
    //===================== Machine Block ===================//  //  This spec demonstrates the differences between transitions and change state operators. (Rust version)
	  //  see Rust Playground:
	  //  https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=54fd31121b1f102916405b0e0d129877
	
    
    let _sS0_ = function (e) {
        if (e._message == "<") {
            that.print_do("Exiting S0");
            return;
        }
        else if (e._message == "transition_do") {
            // transition
            _transition_(_sS1_);
            return;
        }
    }
    
    let _sS1_ = function (e) {
        if (e._message == ">") {
            that.print_do("Entering $S1");
            return;
        }
        else if (e._message == "changeState_do") {
            that.print_do("Changing state to $S0 from $S1");
            _changeState_(_sS0_);
            return;
        }
    }
    
    //===================== Actions Block ===================//
    
    that.print_do = function (msg) { throw new Error('Action not implemented.'); }
    
    //=============== Machinery and Mechanisms ==============//
    
    let _state_ = _sS0_;
    
    let _transition_ = function(newState) {
        let exitEvent = FrameEvent("<",null);
        _state_(exitEvent);
        _state_ = newState;
        let enterEvent = FrameEvent(">",null);
        _state_(enterEvent);
    }
    
    let _changeState_ = function(newState) {
        _state_ = newState;
    }
    
    return that; 
};

let ChangingStateController = function () {
	let that = ChangingState.call(this);
	that.print_do = function (msg) {}
	return that;
};
