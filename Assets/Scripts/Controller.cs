using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class Controller : MonoBehaviour
{
    private string output_text;
    private string key = "input";

#if UNITY_WEBGL && !UNITY_EDITOR
    [DllImport("__Internal")]
    private static extern void AddQuery(string key, string value);
#endif

    private void Start()
    {

    }

    public void InputReader(string text)
    {
        output_text = text;

    #if UNITY_WEBGL && !UNITY_EDITOR
        AddQuery(key, output_text);
    #endif
    }
}
