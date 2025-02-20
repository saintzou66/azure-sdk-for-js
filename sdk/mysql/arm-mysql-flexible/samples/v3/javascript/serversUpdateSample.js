/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MySQLManagementFlexibleServerClient } = require("@azure/arm-mysql-flexible");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/ServerUpdate.json
 */
async function updateAServer() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["MYSQL_RESOURCE_GROUP"] || "testrg";
  const serverName = "mysqltestserver";
  const parameters = {
    storage: { autoGrow: "Disabled", iops: 200, storageSizeGB: 30 },
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.servers.beginUpdateAndWait(resourceGroupName, serverName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/ServerUpdateWithCustomerMaintenanceWindow.json
 */
async function updateServerCustomerMaintenanceWindow() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["MYSQL_RESOURCE_GROUP"] || "testrg";
  const serverName = "mysqltestserver";
  const parameters = {
    maintenanceWindow: {
      customWindow: "Enabled",
      dayOfWeek: 1,
      startHour: 8,
      startMinute: 0,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.servers.beginUpdateAndWait(resourceGroupName, serverName, parameters);
  console.log(result);
}

async function main() {
  updateAServer();
  updateServerCustomerMaintenanceWindow();
}

main().catch(console.error);
