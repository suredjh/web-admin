<template>
    <div class="fcenter user">
        <div class="header"></div>
        <div class="role-name">xiaoming</div>
        <div class="ops-icon"></div>
        <div class="ops-btn">修改密码</div>
        <div class="ops-icon"></div>
        <div class="ops-btn">退出</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .user {
        flex: 1;
        justify-content: flex-end;
        cursor: pointer;
    }
    .header {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: #ffffff;
        margin-right: 20px;
    }
    .ops-btn {
        padding-right: 35px;
    }
    .role-name {
        padding-right: 46px;
    }
    .ops-icon {
        width: 20px;
        height: 20px;
        margin-right: 17px;
        background-color: #fff;
    }

</style>