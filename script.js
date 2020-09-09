Vue.component('task', {
			props: ['data'],
			methods: {
				task_done: function() {
					this.$emit('task_done');
				}
			},
			template: `
				<div class="task card-panel hoverable row #81d4fa light-blue lighten-3">
					<div class="col m11 s12">
						<h4 class="task__title">{{data.title}}</h4>
						<p class="task__desc">{{data.desc}}</p>
					</div>
					<button @click="task_done()" class="task__done col m1 s12 waves-effect waves-light btn"><i class="material-icons">check</i></button>
				</div>
			`
		})

		var Vue = new Vue({
			el: '#app',
			data: {
				new_task: {
					title: '',
					desc: ''
				},
				tasks: [
					
				]
			},
			methods: {
				delete_task(id) {
					this.tasks.splice(id, 1);
				},
				add_task() {
					if(this.new_task.title != '') {
						this.tasks.push({
							title: this.new_task.title,
							desc: this.new_task.desc
						});
						this.new_task.title = '';
						this.new_task.desc = '';
					}
				}
			}
		});
