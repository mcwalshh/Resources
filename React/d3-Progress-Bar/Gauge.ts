class Gauge extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         desc: 'Complete',
         duration: 800,
         height: 300,
         width: 300,
         backgroundColor: '',
         foregroundColor: 'green',
         innerRadius: 90,
         outerRadius: 100,
         percentComplete: .6
       }
     }
   
     propTypes: {
       height: PropTypes.number,
       width: PropTypes.number,
       innerRadius: PropTypes.number,
       outerRadius: PropTypes.number,
       backgroundColor: PropTypes.string,
       foregroundColor: PropTypes.string,
       percentComplete: PropTypes.number,
       desc: propTypes.string
     }
   
     render() {
       return (
         <div>
           <div ref="gauge">
           </div>
         </div>
       )
     }
     componentDidMount() {
       const context = this.setContext();
       this.setBackground(context);
       this.setForeground(context);
       this.setValueText(context);
       this.setTitle(context);
       this.update(context);
   
     }
     update(context) {
       return this.setForeground(context).transition()
         .duration(this.state.duration)
         .style("fill", this.state.foregroundColor)
         .call(this.gaugeTween, (this.tau * this.state.percentComplete * 2) - Math.PI * .75, this.gauge());
     }
   
     gaugeTween(transition, newAngle, gauge) {
       transition.attrTween('d', (d) => {
        const interpolate = d3.interpolate(d.endAngle, newAngle);
        const newArc = d;
         return (t) => {
           newArc.endAngle = interpolate(t);
           return gauge(newArc);
         };
       });
     }
   
     setContext() {
       const { height, width} = this.state;
       return d3.select(this.refs.gauge).append('svg')
         .attr('height', height)
         .attr('width', width)
         .append('g')
         .attr('transform', `translate(${height / 2}, ${width / 2})`);
     }
   
     setValueText(context) {
       return context.append("text")
         .attr("text-anchor", "middle")
         .attr("y", 7)
         .text(Math.round(this.state.percentComplete * 100) + "%")
         .style("font-size","20px");
     }
   
     setTitle(context) {
       return context.append("text")
         .attr("text-anchor", "middle")
         .attr("y", 30)
         .text(this.state.desc)
         .style("font-size","12px");
     }
   
     setBackground(context) {
       return context.append('path')
         .datum({ endAngle: this.tau })
         .style('fill', '#e6e6e6')
         .attr('d', this.gauge());
     }
   
     setForeground(context) {
       return context.append('path')
         .datum({ endAngle: this.tauPos })
         .style('fill', "red")
         .attr('d', this.gauge());
     }
   
     tau = Math.PI * 0.75;
     tauPos = -this.tau;
   
     gauge() {
       return d3.arc()
       .innerRadius(this.state.innerRadius)
       .outerRadius(this.state.outerRadius)
       .startAngle(this.tauPos)
       .cornerRadius(10);
     }
   }