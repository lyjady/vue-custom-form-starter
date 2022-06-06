<template>
  <div class="modeler">
    <div id="canvas" style="width: 70%; height: 100vh"></div>
    <div id="properties" style="width: 30%; height: 100vh"></div>
  </div>
</template>

<script>
// import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel'
export default {
  name: 'BpmnDesigner',
  async created () {
    const modeler = new BpmnModeler({
      container: document.getElementById('canvas'),
      propertiesPanel: {
        parent: document.getElementById('properties')
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule
      ]
    })
    await modeler.createDiagram('<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0e8waxj" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">\n' +
      '  <bpmn:process id="Process_1ncfm6m" name="信号开始事件测试" isExecutable="true">\n' +
      '    <bpmn:startEvent id="StartEvent_1">\n' +
      '      <bpmn:outgoing>Flow_1v8m6wl</bpmn:outgoing>\n' +
      '      <bpmn:signalEventDefinition id="SignalEventDefinition_1w5e9s0" signalRef="Signal_35rdvik" />\n' +
      '    </bpmn:startEvent>\n' +
      '    <bpmn:sequenceFlow id="Flow_1v8m6wl" sourceRef="StartEvent_1" targetRef="Activity_1pf88x9" />\n' +
      '    <bpmn:endEvent id="Event_0ngvud0">\n' +
      '      <bpmn:incoming>Flow_12tjrof</bpmn:incoming>\n' +
      '    </bpmn:endEvent>\n' +
      '    <bpmn:sequenceFlow id="Flow_12tjrof" sourceRef="Activity_1pf88x9" targetRef="Event_0ngvud0" />\n' +
      '    <bpmn:userTask id="Activity_1pf88x9" name="节点1">\n' +
      '      <bpmn:incoming>Flow_1v8m6wl</bpmn:incoming>\n' +
      '      <bpmn:outgoing>Flow_12tjrof</bpmn:outgoing>\n' +
      '    </bpmn:userTask>\n' +
      '  </bpmn:process>\n' +
      '  <bpmn:signal id="Signal_35rdvik" name="Signal_35rdvik" />\n' +
      '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
      '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1ncfm6m">\n' +
      '      <bpmndi:BPMNEdge id="Flow_1v8m6wl_di" bpmnElement="Flow_1v8m6wl">\n' +
      '        <di:waypoint x="228" y="100" />\n' +
      '        <di:waypoint x="280" y="100" />\n' +
      '      </bpmndi:BPMNEdge>\n' +
      '      <bpmndi:BPMNEdge id="Flow_12tjrof_di" bpmnElement="Flow_12tjrof">\n' +
      '        <di:waypoint x="380" y="100" />\n' +
      '        <di:waypoint x="432" y="100" />\n' +
      '      </bpmndi:BPMNEdge>\n' +
      '      <bpmndi:BPMNShape id="Event_1cai0qo_di" bpmnElement="StartEvent_1">\n' +
      '        <dc:Bounds x="192" y="82" width="36" height="36" />\n' +
      '      </bpmndi:BPMNShape>\n' +
      '      <bpmndi:BPMNShape id="Event_0ngvud0_di" bpmnElement="Event_0ngvud0">\n' +
      '        <dc:Bounds x="432" y="82" width="36" height="36" />\n' +
      '      </bpmndi:BPMNShape>\n' +
      '      <bpmndi:BPMNShape id="Activity_0s4usmb_di" bpmnElement="Activity_1pf88x9">\n' +
      '        <dc:Bounds x="280" y="60" width="100" height="80" />\n' +
      '        <bpmndi:BPMNLabel />\n' +
      '      </bpmndi:BPMNShape>\n' +
      '    </bpmndi:BPMNPlane>\n' +
      '  </bpmndi:BPMNDiagram>\n' +
      '</bpmn:definitions>')
    console.log('rendered')
  }
}
</script>

<style scoped>

</style>
