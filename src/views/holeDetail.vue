<template>
  <div class="hole-detail">
    <div class="search-box">
      <label>
        项目名称
        <input
          type="text"
          placeholder="请输入项目名称"
          v-model="tableForm.projectName"
        />
      </label>
      <label>
        项目当前责任人
        <input
          type="text"
          placeholder="项目当前责任人"
          v-model="tableForm.dutyUserName"
        />
      </label>
      <label>
        责任部门
        <baseCascader
          v-model="tableForm.orgId"
          :data="systemOrgNodeTreeSearch"
        />
      </label>
      <button @click="init(true)"><svg-icon icon-class="search" />搜索</button>
    </div>

    <baseTable :tableData="tableData.list">
      <baseCol prop="projectCode" label="项目编号" />
      <baseCol prop="projectName" label="项目名称" />
      <baseCol prop="dutyUserName" label="项目当前责任人" />
      <baseCol prop="dutyDepartment" label="责任部门" />
      <baseCol prop="orgName" label="所属运营商" />
      <baseCol prop="firmName" label="项目厂商" />
      <baseCol prop="processNode" label="当前所处流程节点" />
      <baseCol label="操作">
        <template #button="props">
          <button @click="openDialog('编辑备案', props.row)">
            编辑
          </button>
        </template>
      </baseCol>
    </baseTable>

    <basePagination
      :currentPage.sync="tableForm.startPage"
      :total="tableData.total"
      :pages="tableData.pages"
      @changeCurrentPage="init"
    />
  </div>
</template>

<script>
import { getFlawListByFileId } from '@/api/flawCommon'
import { orgTreeSearch } from '@/assets/mixin/common'

export default {
  name: 'HoleDetail',
  mixins: [orgTreeSearch],
  data() {
    return {
      tableForm: {
        startPage: 1,
        pageSize: 20,
        projectName: '',
        dutyUserName: '',
        orgId: '',
      },
      tableData: {},
      dialog: false,
      dialogTitle: '',
    }
  },
  methods: {
    init(isSearch) {
      if (isSearch) this.tableForm.startPage = 1
      getFlawListByFileId(this.tableForm).then((res) => {
        this.tableData = res.data
      })
    },
  },
}
</script>

<style lang="sass" scoped></style>
