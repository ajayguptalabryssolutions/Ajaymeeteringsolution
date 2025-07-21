const commandTemplates = {
    forced_eb: {
      name: "Force EB",
      description: "Force switch to EB supply",
      payload: "AA060010",
      params: [],
    },
    forced_dg: {
      name: "Force DG",
      description: "Force switch to DG supply",
      payload: "",
      params: [],
    },
    forced_eb_dg_reset: {
      name: "Reset EB/DG Force State",
      description: "Reset forced EB/DG state",
      payload: "",
      params: [],
    },
    balance_deduct_random: {
      name: "Random Balance Deduct",
      description: "Deduct random balance",
      payload: "",
      params: [],
    },
    run_eb_only: {
      name: "Run EB Only",
      description: "Switch to EB only mode",
      payload: "AA0600140000D015",
      params: [],
    },
    run_dg_only: {
      name: "Run DG Only",
      description: "Switch to DG only mode",
      payload: "",
      params: [],
    },
    run_eb_dg_only_reset: {
      name: "Reset EB/DG Only",
      description: "Reset EB/DG only state",
      payload: "",
      params: [],
    },
    set_happy_day: {
      name: "Set Happy Day",
      description: "Mark happy day for tariff",
      payload: "",
      params: [],
    },
    set_happy_hour: {
      name: "Set Happy Hour",
      description: "Mark happy hour for tariff",
      payload: "",
      params: [],
    },
    emergency_button_reset: {
      name: "Reset Emergency Button",
      description: "Reset emergency button state",
      payload: "",
      params: [],
    },
    set_monthly_deduct_tariff: {
      name: "Set Monthly Deduct Tariff",
      description: "Configure monthly deduction",
      payload: "AA06001A{tariff}",
      params: [
        {
          name: "tariff",
          type: "number",
          min: 0,
          max: 9999,
          step: 1,
          default: 100,
        },
      ],
    },
    set_meter_id: {
      name: "Set Meter ID",
      description: "Assign a meter ID",
      payload: "AA06001B{meterId}",
      params: [{ name: "meterId", type: "text", default: "0001" }],
    },
    update_overload_dg: {
      name: "Update Overload DG",
      description: "Update overload setting for DG",
      payload: "AA060021{value}",
      params: [
        {
          name: "value",
          type: "number",
          min: 0,
          max: 65535,
          step: 1,
          default: 1000,
        },
      ],
    },
    update_overload_eb: {
      name: "Update Overload EB",
      description: "Update overload setting for EB",
      payload: "AA060022{value}",
      params: [
        {
          name: "value",
          type: "number",
          min: 0,
          max: 65535,
          step: 1,
          default: 1000,
        },
      ],
    },
    update_tariff_dg: {
      name: "Update Tariff DG",
      description: "Update unit tariff for DG supply",
      payload: "AA060023{tariff}",
      params: [
        {
          name: "tariff",
          type: "number",
          min: 0,
          max: 9999,
          step: 1,
          default: 10,
        },
      ],
    },
    update_tariff_eb: {
      name: "Update Tariff EB",
      description: "Update unit tariff for EB supply",
      payload: "AA060024{tariff}",
      params: [
        {
          name: "tariff",
          type: "number",
          min: 0,
          max: 9999,
          step: 1,
          default: 5,
        },
      ],
    },
    recharge_balance: {
      name: "Recharge Balance",
      description: "Recharge consumer balance",
      payload: "AA060025{amount}",
      params: [
        {
          name: "amount",
          type: "number",
          min: 1,
          max: 10000,
          step: 1,
          default: 100,
        },
      ],
    },
    set_daily_deduct_tariff: {
      name: "Set Daily Deduct Tariff",
      description: "Set tariff for daily deduction",
      payload: "AA060026{tariff}",
      params: [
        {
          name: "tariff",
          type: "number",
          min: 0,
          max: 9999,
          step: 1,
          default: 50,
        },
      ],
    },
    set_overload_max_attempt: {
      name: "Set Overload Max Attempt",
      description: "Set max retry count after overload",
      payload: "AA060027{attempts}",
      params: [
        {
          name: "attempts",
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          default: 3,
        },
      ],
    },
    set_overload_attempt_wait_time: {
      name: "Set Overload Wait Time",
      description: "Set wait time (in seconds) after overload",
      payload: "AA060028{time}",
      params: [
        {
          name: "time",
          type: "number",
          min: 1,
          max: 3600,
          step: 1,
          default: 30,
        },
      ],
    },
    forced_relay_on: {
      name: "Forced Relay ON",
      description: "Turn on the relay manually",
      payload: "AA060029000041D9",
      params: [],
    },
    forced_relay_off: {
      name: "Forced Relay OFF",
      description: "Turn off the relay manually",
      payload: "AA06002A00017019",
      params: [],
    },
    forced_relay_clear: {
      name: "Forced Relay Clear",
      description: "Clear forced relay state",
      payload: "",
      params: [],
    },
    forced_individual_relay_dg: {
      name: "Forced Individual Relay DG",
      description: "Control individual DG relay",
      payload: "",
      params: [],
    },
    forced_individual_relay_eb: {
      name: "Forced Individual Relay EB",
      description: "Control individual EB relay",
      payload: "",
      params: [],
    },
    clear_balance: {
      name: "Clear Balance",
      description: "Zero out the balance",
      payload: "AA06003F0000A01D",
      params: [],
    },
    clear_overload_fault: {
      name: "Clear Overload Fault",
      description: "Clear the overload trip/fault state",
      payload: "AA06001C000051D7",
      params: [],
    },
    custom: {
      name: "Custom Command",
      description: "Send raw HEX command manually",
      payload: "",
      params: [{ name: "payload", type: "text", default: "" }],
    },
  };

  export default commandTemplates;