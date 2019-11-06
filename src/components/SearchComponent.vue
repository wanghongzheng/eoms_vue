<template>
    <div>
        <div class="formItem">
            <label>开始时间</label>
            <el-date-picker
                    v-model="beginTime"
                    type="datetime"
                    placeholder="选择日期时间">
            </el-date-picker>
        </div>
        <div class="formItem">
            <label>结束时间</label>
            <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    placeholder="选择日期时间">
            </el-date-picker>
        </div>
        <div class="formItem">
            <label>任务类型</label>
            <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                beginTime: '',
                endTime: '',
                options: [{
                    value: '1',
                    label: '任务1'
                }, {
                    value: '2',
                    label: '任务2'
                }, {
                    value: '3',
                    label: '任务3'
                }, {
                    value: '4',
                    label: '任务4'
                }, {
                    value: '5',
                    label: '任务5'
                }, {
                    value: '6',
                    label: '任务6'
                }],
                value: ''
            }
        }
    }
</script>
<style scoped lang="scss">
    .formItem{
        margin:20px;
        label{
          margin-right:10px;
        }
        el-select,el-date-picker{
            //float:right;
        }
    }
</style>
