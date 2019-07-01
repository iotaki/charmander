<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="Uri"></el-input>
				</el-form-item>
				<el-select v-model="filters.method" placeholder="RequestMethod">
					<el-option label="ALL" value="ALL"></el-option>
					<el-option label="GET" value="GET"></el-option>
					<el-option label="POST" value="POST"></el-option>
					<el-option label="PUT" value="PUT"></el-option>
					<el-option label="DELETE" value="DELETE"></el-option>
				</el-select>
				<el-form-item>
					<el-button type="primary" v-on:click="getRoute">Search</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="route" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="id" label="ID" width="240" sortable>
				</el-table-column>
				<el-table-column prop="uri" label="URI" width="100"  sortable>
				</el-table-column>
				<el-table-column prop="requestMethod" label="请求方式" width="100" sortable>
				</el-table-column>
				<el-table-column prop="methodName" label="脚本方法" width="120" sortable>
				</el-table-column>
				<el-table-column prop="content" label="脚本内容" min-width="120" sortable>
					<template slot-scope="scope">
						<el-button
								@click.native.prevent="deleteRow(scope.$index, tableData)"
								type="text"
								size="small">
							移除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getRouteList } from '../../api/api';;


	export default {
		data() {
			return {
				filters: {
					name: '',
					method:'ALL'
				},
				loading: false,
				route: [
				]
			}
		},
		methods: {
			getRoute: function () {
				let para = {
					name: this.filters.name,
					requestMethod:this.filters.method,
				};
				this.loading = true;
				//NProgress.start();
				getRouteList(para).then((res) => {
					this.route = res.data;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
			this.getRoute();
		}
	};

</script>

<style scoped>

</style>