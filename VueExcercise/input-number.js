// JavaScript Document
Vue.component('input-number',{
			props:{
				value:{type:Number,default:0},
				max:{type:Number,default:Infinity},
				min:{type:Number,default:-Infinity}
			},
			template:`<div class="input-number">
<input type="text" v-bind:value="currentValue" v-on:change="handleChange"/>
<button type="button" v-on:click="handleUp" v-bind:disabled="currentValue >=max">+</button>
<button type="button" v-on:click="handleDown" v-bind:disabled="currentValue<=min">-</button>
		</div>`,
			data:function(){
				return {
					currentValue:this.value
				};
			},
			watch:{
				currentValue:function(val,oldVal){
					this.$emit('input',val);
				}
			},
			methods:{
				handleDown:function(){
					this.updateChange(this.currentValue-1);
				},
				handleUp:function(){
					this.updateChange(this.currentValue+1);
				},
				updateChange:function(val){
					var oldVal=this.currentValue;
					val=Number(val);
					if(!Number.isNaN(val)){
						this.currentValue=val;
						if(val>this.max){
							this.currentValue=this.max;
						}
						else if(val < this.min){
							this.currentValue=this.min;
						}
					}
					else{
						this.currentValue=oldVal-1;
						this.currentValue=oldVal;
					}
				},
				handleChange:function(event){
						this.updateChange(event.target.value.trim());
				}
			},
			mounted:function(){
				this.updateChange(this.value);
			}
		});