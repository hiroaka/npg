import React, {Component} from 'react';

class Form extends Component {

    codeLength = 6;

    constructor(props){
        super(props);
        this.state = {
            force: 8,
            useNumbers: true,
            useSymbols: true,
            useUpperCase: true,
            useLowerCase: true,
            thePassword: true
        }
    }

    generateTheCode(){
        var result = [];

        let strLength =  5;
        let charSet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        while (strLength--) { // (note, fixed typo)
            result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
        }

        var theCode = result.join('');
        console.log('theCode', theCode);

    }

    handleChange = (event) =>{
        
        const value = event.target.value;
        console.log(this.state.useNumbers, event.target.name, value)
        this.setState(
            {
            [event.target.name]: value
        }) 
        // this.setState({ va})
    }
    copyPassword(){
        console.log('copy password')
    }

    render() {
        return (
            <div className="text-start">
                <form>


                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="numberCheck" name='useNumbers' checked={this.state.useNumbers} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="numberCheck">Números</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="symbolCheck" checked={this.state.useSymbols}  onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="symbolCheck">Símbolos</label>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="upperCheck"  checked={this.state.useUpperCase}  onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="upperCheck">MAIÚSCULA</label>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="lowerCheck" checked={this.state.useLowerCase}  onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="lowerCheck">minúscula</label>
                    </div>
                    <div className="mb-3">
                        <select value={this.state.force} className="form-select" aria-label="Default select example"  onChange={this.handleChange}>
                            <optgroup label="Weak">
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </optgroup>
                            <optgroup label="Strong">
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                <option value="61">61</option>
                                <option value="62">62</option>
                                <option value="63">63</option>
                                <option value="64">64</option>
                                <option value="65">65</option>
                                <option value="66">66</option>
                                <option value="67">67</option>
                                <option value="68">68</option>
                                <option value="69">69</option>
                                <option value="70">70</option>
                                <option value="71">71</option>
                                <option value="72">72</option>
                                <option value="73">73</option>
                                <option value="74">74</option>
                                <option value="75">75</option>
                                <option value="76">76</option>
                                <option value="77">77</option>
                                <option value="78">78</option>
                                <option value="79">79</option>
                                <option value="80">80</option>
                                <option value="81">81</option>
                                <option value="82">82</option>
                                <option value="83">83</option>
                                <option value="84">84</option>
                                <option value="85">85</option>
                                <option value="86">86</option>
                                <option value="87">87</option>
                                <option value="88">88</option>
                                <option value="89">89</option>
                                <option value="90">90</option>
                                <option value="91">91</option>
                                <option value="92">92</option>
                                <option value="93">93</option>
                                <option value="94">94</option>
                                <option value="95">95</option>
                                <option value="96">96</option>
                                <option value="97">97</option>
                                <option value="98">98</option>
                                <option value="99">99</option>
                                <option value="100">100</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                                <option value="103">103</option>
                                <option value="104">104</option>
                                <option value="105">105</option>
                                <option value="106">106</option>
                                <option value="107">107</option>
                                <option value="108">108</option>
                                <option value="109">109</option>
                                <option value="110">110</option>
                                <option value="111">111</option>
                                <option value="112">112</option>
                                <option value="113">113</option>
                                <option value="114">114</option>
                                <option value="115">115</option>
                                <option value="116">116</option>
                                <option value="117">117</option>
                                <option value="118">118</option>
                                <option value="119">119</option>
                                <option value="120">120</option>
                                <option value="121">121</option>
                                <option value="122">122</option>
                                <option value="123">123</option>
                                <option value="124">124</option>
                                <option value="125">125</option>
                                <option value="126">126</option>
                                <option value="127">127</option>
                                <option value="128">128</option>
                            </optgroup>

                            <optgroup label="Unbelievable">
                                <option value="256">256</option>
                                <option value="512">512</option>
                                <option value="1024">1024</option>
                                <option value="2048">2048</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Sua senha"
                                   aria-label="Sua senha" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.copyPassword}>Copiar
                                </button>
                        </div>
                    </div>


                    <button type="button" className="btn btn-primary" onClick={this.generateTheCode}>Generate</button>
                </form>
            </div>
        );
    }
}

export default Form;