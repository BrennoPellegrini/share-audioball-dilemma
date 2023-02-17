import React, { useState, useEffect } from 'react'
import {SimplexNoise} from 'simplex-noise'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useTheme } from '../contexts'


function Sphere({ theme }) {
  const [metalness, changeMetalness] = useState(0.9)
  const [color, changeColor] = useState('#aaa')

  useEffect(() => {
    const newMetalness = theme === 'dark' ? 0.9 : 0.1
    const newColor = theme === 'dark' ? '#aaa' : '#fff'
    changeMetalness(newMetalness)
    changeColor(newColor)
  }, [theme])

  return (
    <mesh>
      <sphereGeometry args={[1, 17, 17]} />
      <meshStandardMaterial
        color={color}
        clearcoat={0.8}
        clearcoatRoughness={0.4}
        roughness={1}
        metalness={metalness}
      />
    </mesh>
  )
}


const AudioBall = () => {
  // const noise = new SimplexNoise()

  const [theme] = useTheme()

  // useEffect(() => {
  //   const audio = document.querySelector('#my-audio')
  //   const context = new AudioContext()
  //   const source = context.createMediaElementSource(audio)
  //   const analyser = context.createAnalyser()

  //   source.connect(analyser)
  //   analyser.connect(context.destination)
  //   analyser.fftSize = 512

  //   const bufferLength = analyser.frequencyBinCount
  //   const dataArray = new Uint8Array(bufferLength)
  //   analyser.getByteFrequencyData(dataArray)
  //   render()
  // }, [])

  // function play() {
  //     function render() {
  //       analyser.getByteFrequencyData(dataArray);

  //       var lowerHalfArray = dataArray.slice(0, (dataArray.length/2) - 1);
  //       var upperHalfArray = dataArray.slice((dataArray.length/2) - 1, dataArray.length - 1);

  //       var overallAvg = avg(dataArray);
  //       var lowerMax = max(lowerHalfArray);
  //       var lowerAvg = avg(lowerHalfArray);
  //       var upperMax = max(upperHalfArray);
  //       var upperAvg = avg(upperHalfArray);

  //       var lowerMaxFr = lowerMax / lowerHalfArray.length;
  //       var lowerAvgFr = lowerAvg / lowerHalfArray.length;
  //       var upperMaxFr = upperMax / upperHalfArray.length;
  //       var upperAvgFr = upperAvg / upperHalfArray.length;

  //       makeRoughBall(ball, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));

  //       group.rotation.y += 0.005;
  //       renderer.render(scene, camera);
  //       requestAnimationFrame(render);
  //     }

  //     function makeRoughBall(mesh, bassFr, treFr) {
  //         mesh.geometry.vertices.forEach(function (vertex, i) {
  //             var offset = mesh.geometry.parameters.radius;
  //             var amp = 7;
  //             var time = window.performance.now();
  //             vertex.normalize();
  //             var rf = 0.00001;
  //             var distance = (offset + bassFr ) + noise.noise3D(vertex.x + time *rf*7, vertex.y +  time*rf*8, vertex.z + time*rf*9) * amp * treFr;
  //             vertex.multiplyScalar(distance);
  //         });
  //         mesh.geometry.verticesNeedUpdate = true;
  //         mesh.geometry.normalsNeedUpdate = true;
  //         mesh.geometry.computeVertexNormals();
  //         mesh.geometry.computeFaceNormals();
  //     }

  //     function makeRoughGround(mesh, distortionFr) {
  //         mesh.geometry.vertices.forEach(function (vertex, i) {
  //             var amp = 2;
  //             var time = Date.now();
  //             var distance = (noise.noise2D(vertex.x + time * 0.0003, vertex.y + time * 0.0001) + 0) * distortionFr * amp;
  //             vertex.z = distance;
  //         });
  //         mesh.geometry.verticesNeedUpdate = true;
  //         mesh.geometry.normalsNeedUpdate = true;
  //         mesh.geometry.computeVertexNormals();
  //         mesh.geometry.computeFaceNormals();
  //     }

  //     audio.play();
  //   };
  // }

  // window.onload = vizInit();

  // document.body.addEventListener('touchend', function(ev) { context.resume(); });

  function fractionate(val, minVal, maxVal) {
    return (val - minVal) / (maxVal - minVal)
  }

  function modulate(val, minVal, maxVal, outMin, outMax) {
    var fr = fractionate(val, minVal, maxVal)
    var delta = outMax - outMin
    return outMin + fr * delta
  }

  function avg(arr) {
    var total = arr.reduce(function (sum, b) {
      return sum + b
    })
    return total / arr.length
  }

  function max(arr) {
    return arr.reduce(function (a, b) {
      return Math.max(a, b)
    })
  }

  return (
    <div id="audio-ball" className=" z-1 absolute">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[-10, 40, 20]} intensity={0.15} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Sphere theme={theme} />
      </Canvas>
    </div>
  )
}

export default AudioBall
